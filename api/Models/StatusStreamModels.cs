using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class StatusStreamMessage
    {
        public int SolutionId { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public string MessageClass { get; set; }
        public string Message { get; set; }
    }
}
