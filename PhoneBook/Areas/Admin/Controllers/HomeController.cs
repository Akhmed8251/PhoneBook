using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using PhoneBook.Models;

namespace PhoneBook.Areas.Admin.Controllers
{
    [Area("admin")]
    public class HomeController : Controller
    {
        PhoneBookContext db;
        public HomeController(PhoneBookContext context)
        {
            db = context;
        }
        public IActionResult Index()
        {
            return View(db.Structures.ToList());
        }
    }
}
