using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using corev3.Models;

namespace corev3.Repositories
{
    public class StatusStreamRepository
    {
        public List<StatusStreamMessage> ProcessStatusStreamMessagesByDays(List<StatusStreamMessage> StatusStreamMessageList, int NumberOfDays)
        {
            DateTime CutOffDate = DateTime.Now.AddDays(-NumberOfDays).Date;
            StatusStreamMessageList.RemoveAll(foo => foo.CreatedDateTime < CutOffDate);
            return StatusStreamMessageList;
        }
    }
}
