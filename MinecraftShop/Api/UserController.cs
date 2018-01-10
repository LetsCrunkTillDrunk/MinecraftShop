using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using MinecraftShop.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MinecraftShop.Api
{
    [Route("api/user")]
    public class UserController : Controller
    {
        UserContext db;

        public UserController(UserContext userContext)
        {
            db = userContext;
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public JsonResult Post([FromBody]User user)
        {
            
            if (ModelState.IsValid)
            {
                if (user.Email != null || user.Email != "" || user.Login != null || user.Login != "" || user.Password != null || user.Password != "")
                {
                    User search = db.Users.Where(i => i.Login == user.Login).FirstOrDefault();
                    if (search != null) return Json("Such login already exists");
                    else
                    {

                        db.Add(user);
                        db.SaveChanges();
                        return Json("User was saved");
                    }
                }
                else return Json("All fields must be empty");
            }
            else return Json("Model state is not defined");
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
