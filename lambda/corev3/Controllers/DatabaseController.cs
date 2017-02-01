using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using corev3.Models;
using corev3.Repositories;

namespace corev3.Controllers
{
    [Route("api/[controller]")]
    public class DatabaseController : Controller
    {
        [Route("getstatusstreammessages")]
        [HttpGet]
        public List<StatusStreamMessage> GetStatusStreamMessages()
        {
            MySqlRepository MySqlRepo = new MySqlRepository();
            return MySqlRepo.GetStatusStreamMessages();
        }
    }
}
