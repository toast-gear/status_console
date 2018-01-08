using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.Repositories;
using Microsoft.Extensions.Options;

namespace api.Controllers
{
    [Produces("application/json")]
    [Route("api/ideas")]
    public class IdeasController : Controller
    {
        private IOptions<DatabaseConfig> _config;

        public IdeasController(IOptions<DatabaseConfig> DatabaseConfig)
        {
            _config = DatabaseConfig;
        }
        
        [Route("getideasbycountbysolution")]
        [HttpGet]
        public List<IdeaModel> GetIdeasByCountBySolution([FromQuery]int NumberOfItems, [FromQuery] int SolutonId)
        {
            string ConnectionString = _config.Value.ConnectionString;
            IdeasRepository IdeasRepo = new IdeasRepository();
            return IdeasRepo.GetIdeasByCountBySolution(NumberOfItems, SolutonId);
        }
    }
}
