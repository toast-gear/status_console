using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.Repositories;
using Microsoft.Extensions.Options;

namespace api.Controllers
{
    [Produces("application/json")]
    [Route("api/statusstream")]
    public class StatusStreamController : Controller
    {
        private IOptions<DatabaseConfig> _config;

        public StatusStreamController(IOptions<DatabaseConfig> DatabaseConfig)
        {
            _config = DatabaseConfig;
        }

        [Route("getstatusstreammessages")]
        [HttpGet]
        public List<List<StatusStreamMessage>> GetStatusStreamMessages([FromQuery]int NumberOfDays)
        {
            string ConnectionString = _config.Value.ConnectionString;
            StatusStreamRepository StatusStreamRepo = new StatusStreamRepository();
            return StatusStreamRepo.GetStatusStreamMessages(NumberOfDays, ConnectionString);
        }

        [Route("getlateststatusmessage")]
        [HttpGet]
        public StatusStreamMessage GetLatestStatusMessage()
        {
            string ConnectionString = _config.Value.ConnectionString;
            StatusStreamRepository StatusStreamRepo = new StatusStreamRepository();
            return StatusStreamRepo.GetLatestStatusMessage(ConnectionString);
        }
    }
}
