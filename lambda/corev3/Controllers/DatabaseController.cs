using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using corev3.Models;
using corev3.Repositories;
using System.Net.Http;
using System.Web.Http;
using System.Net;

namespace corev3.Controllers
{
    [Route("api/[controller]")]
    public class DatabaseController : Controller
    {
        [Route("getstatusstreammessages")]
        [HttpGet]
        // Query String
        public List<List<StatusStreamMessage>> GetStatusStreamMessages([FromUri]int NumberOfDays)
        {
            try
            {
                MySqlRepository MySqlRepo = new MySqlRepository();
                return MySqlRepo.GetStatusStreamMessages(NumberOfDays);
            }
            catch (Exception ex)
            {
                var message = new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    ReasonPhrase = ex.Message
                };
                throw new HttpResponseException(message);
            }
        }
        [Route("getlateststatusmessage")]
        [HttpGet]
        public StatusStreamMessage GetLatestStatusMessage()
        {
            try
            {
                MySqlRepository MySqlRepo = new MySqlRepository();
                return MySqlRepo.GetLatestStatusMessage();
            }
            catch (Exception ex)
            {
                var message = new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    ReasonPhrase = ex.Message
                };
                throw new HttpResponseException(message);
            }
        }
    }
}
