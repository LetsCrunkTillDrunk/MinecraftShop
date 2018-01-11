using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Logging;
using MinecraftShop.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MinecraftShop.Api
{
    [Route("api/user")]
    public class UserController : Controller
    {
        UserContext db;
        ILogger<UserController> _logger;

       
        public UserController(UserContext userContext, ILogger<UserController> logger)
        {
            db = userContext;
            _logger = logger;
        }
        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(db.Users);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            User user = db.Users.Where(i=> i.UserId == id).FirstOrDefault();
            if (user!= null) return Ok(user);
            return BadRequest("User not found");
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody]User user)
        {
            
            if (ModelState.IsValid)
            {
                if (user.Email != null || user.Email != "" || user.Login != null || user.Login != "" || user.Password != null || user.Password != "")
                {
                    User search = db.Users.Where(i => i.Login == user.Login).FirstOrDefault();
                    if (search != null) return BadRequest("Such login already exists");
                    else
                    {
                        db.Add(user);
                        db.SaveChanges();
                        return Ok("User was saved");
                    }
                }
                else return BadRequest("All fields must be empty");
            }
            else return BadRequest("Model state is not defined");
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]User passedUser)
        {
            var user = db.Users.Where(i=> i.UserId == passedUser.UserId ).FirstOrDefault();

            if (user == null)
                return BadRequest("No match");

            if (passedUser.Login != user.Login)
            {
                if (db.Users.Any(i => i.Login == passedUser.Login))
                    return BadRequest("Login already taken");
            }

            user.Login = passedUser.Login;
            user.Password = passedUser.Password;
            user.Email = passedUser.Email;

            db.Users.Update(user);
            db.SaveChanges();
            return Ok("User was updated");
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _logger.LogError(id.ToString());
            User user = db.Users.Where(i=> i.UserId == id).FirstOrDefault();
            if (user != null)
            {
                db.Users.Remove(user);
                db.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }
    }
}
