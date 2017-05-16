using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.Repositories;

namespace api.Controllers
{
    [Produces("application/json")]
    [Route("api/statusstream")]
    public class StatusStreamController : Controller
    {
        [Route("getstatusstreammessages")]
        [HttpGet]
        public List<List<StatusStreamMessage>> GetStatusStreamMessages([FromQuery]int NumberOfDays)
        {
            StatusStreamRepository StatusStreamRepo = new StatusStreamRepository();
            return StatusStreamRepo.GetStatusStreamMessages(NumberOfDays);
        }

        [Route("getlateststatusmessage")]
        [HttpGet]
        public StatusStreamMessage GetLatestStatusMessage()
        {
            StatusStreamRepository StatusStreamRepo = new StatusStreamRepository();
            return StatusStreamRepo.GetLatestStatusMessage();
        }
    }
}
