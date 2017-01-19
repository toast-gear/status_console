using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace corev3.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        [HttpGet]
        [Route("values")]
        public IEnumerable<string> GetValues()
        {
            return new string[] { "value1", "value2" };
        }
        [HttpGet]
        [Route("creatures")]
        public IEnumerable<string> GetCreatures()
        {
            return new string[] { "lion", "Dog" };
        }
    }
}
