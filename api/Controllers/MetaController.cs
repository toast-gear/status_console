using System;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Produces("application/json")]
    [Route("api/meta")]
    public class MetaController : Controller
    {
        [Route("getlocalservertime")]
        [HttpGet]
        public JsonResult GetServerLocalTime()
        {
            return Json(DateTime.Now.ToString("yyyy-MM-dd HH:mm"));
        }
        [Route("ping")]
        [HttpGet]
        public JsonResult ping()
        {
            return Json("True");
        }
    }
}
