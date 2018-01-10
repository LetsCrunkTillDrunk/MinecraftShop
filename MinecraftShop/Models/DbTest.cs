using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinecraftShop.Models
{
    public class DbTest
    {
        public static void Init(UserContext db) {
            db.Database.EnsureCreated();
            if (db.Users.Any()) return;

            User user = new User { Login = "user", Email = "user@gmail.com", Password = "1111" };
            db.Users.Add(user);
            db.SaveChanges();
        }
    }
}
