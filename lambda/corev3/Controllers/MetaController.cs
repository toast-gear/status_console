using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace corev3.Controllers
{
    [Route("api/[controller]")]
    public class MetaController : Controller
    {
        [Route("localservertime")]
        [HttpGet]
        public string GetServerLocalTime()
        {
            return DateTime.Now.ToString("yyyy-MM-dd HH:mm");
        }
    }
}
