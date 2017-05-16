using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.Repositories;

namespace api.Controllers
{
    [Produces("application/json")]
    [Route("api/ideas")]
    public class IdeasController : Controller
    {
        [Route("getideasbycountbysolution")]
        [HttpGet]
        public List<IdeaModel> GetIdeasByCountBySolution([FromQuery]int NumberOfItems, [FromQuery] int SolutonId)
        {
            IdeasRepository IdeasRepo = new IdeasRepository();
            return IdeasRepo.GetIdeasByCountBySolution(NumberOfItems, SolutonId);
        }
    }
}
