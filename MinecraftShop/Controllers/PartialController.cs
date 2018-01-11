using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MinecraftShop.Controllers
{
    public class PartialController : Controller
    {
        public IActionResult AppComponent()
        {
            return PartialView();
        }
        public IActionResult MainComponent()
        {
            return PartialView();
        }
        public IActionResult LoginComponent()
        {
            return PartialView();
        }
        public IActionResult RegisterComponent()
        {
            return PartialView();
        }

        public IActionResult PanelComponent()
        {
            return PartialView();
        }

        public IActionResult BlankComponent()
        {
            return PartialView();
        }

        public IActionResult UserListComponent()
        {
            return PartialView();
        }
    }
}