using Microsoft.AspNetCore.Mvc;

namespace _220lv.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
    }
}