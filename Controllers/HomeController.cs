using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Prueba_Tecnica.Models;
using Newtonsoft.Json;

namespace Prueba_Tecnica.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public JsonResult getBill(PruebaTecnica.Models.Bill bill)
        {
            var twoToThreePassager = bill.subida3 - bill.bajada3;
         
            bill.factura2 = bill.bajada2 * 1000;
            bill.factura3 = bill.bajada3 * 1500;
            bill.factura4 = twoToThreePassager * 2300 + (bill.subida4 - twoToThreePassager) * 1300;

            bill.total = bill.factura2 + bill.factura3 + bill.factura4;

            return Json(bill);
        }
    }
}
