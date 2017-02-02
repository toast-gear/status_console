﻿using System;
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
        public List<StatusStreamMessage> GetStatusStreamMessages()
        {
            try
            {
                MySqlRepository MySqlRepo = new MySqlRepository();
                return MySqlRepo.GetStatusStreamMessages();
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
