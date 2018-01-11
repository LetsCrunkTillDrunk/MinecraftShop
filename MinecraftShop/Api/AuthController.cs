using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MinecraftShop.Models;

namespace MinecraftShop.Api
{
    [Route("api/auth")]
    public class AuthController : Controller
    {
        UserContext db;
        ILogger<UserController> _logger;

        public AuthController(UserContext userContext, ILogger<UserController> logger)
        {
            db = userContext;
            _logger = logger;
        }
        public User Authenticate(string login, string password)
        {
            if (string.IsNullOrEmpty(login) || string.IsNullOrEmpty(password))
                return null;

            var user = db.Users.SingleOrDefault(x => x.Login == login);

            if (user == null)
                return null;

            if (user.Password != password)
                return null;

            return user;
        }
    }
}