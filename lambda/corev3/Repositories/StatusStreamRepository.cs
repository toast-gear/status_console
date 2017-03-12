using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using corev3.Models;

namespace corev3.Repositories
{
    public class StatusStreamRepository
    {
        public List<List<StatusStreamMessage>> ProcessStatusStreamMessagesByDays(List<StatusStreamMessage> StatusStreamMessageList, int NumberOfDays)
        {
            DateTime CutOffDate = DateTime.Now.AddDays(-NumberOfDays).Date;
            StatusStreamMessageList.RemoveAll(foo => foo.CreatedDateTime < CutOffDate);
            StatusStreamMessageList.GroupBy(foo => Convert.ToDateTime(foo.CreatedDateTime.ToString("yyyy-MM")));
            List<List<StatusStreamMessage>> MonthsList = new List<List<StatusStreamMessage>>();
            List<StatusStreamMessage> Jan = new List<StatusStreamMessage>();
            List<StatusStreamMessage> Feb = new List<StatusStreamMessage>();
            List<StatusStreamMessage> Mar = new List<StatusStreamMessage>();
            List<StatusStreamMessage> Apr = new List<StatusStreamMessage>();
            List<StatusStreamMessage> May = new List<StatusStreamMessage>();
            List<StatusStreamMessage> Jun = new List<StatusStreamMessage>();
            List<StatusStreamMessage> Jul = new List<StatusStreamMessage>();
            List<StatusStreamMessage> Aug = new List<StatusStreamMessage>();
            List<StatusStreamMessage> Sep = new List<StatusStreamMessage>();
            List<StatusStreamMessage> Oct = new List<StatusStreamMessage>();
            List<StatusStreamMessage> Nov = new List<StatusStreamMessage>();
            List<StatusStreamMessage> Dec = new List<StatusStreamMessage>();
            foreach (StatusStreamMessage Month in StatusStreamMessageList)
            {
                switch (Convert.ToInt16(Month.CreatedDateTime.ToString("MM")))
                {
                    case 01:
                        Jan.Add(Month);
                        break;
                    case 02:
                        Feb.Add(Month);
                        break;
                    case 03:
                        Mar.Add(Month);
                        break;
                    case 04:
                        Apr.Add(Month);
                        break;
                    case 05:
                        May.Add(Month);
                        break;
                    case 06:
                        Jun.Add(Month);
                        break;
                    case 07:
                        Jul.Add(Month);
                        break;
                    case 08:
                        Aug.Add(Month);
                        break;
                    case 09:
                        Sep.Add(Month);
                        break;
                    case 10:
                        Oct.Add(Month);
                        break;
                    case 11:
                        Nov.Add(Month);
                        break;
                    case 12:
                        Dec.Add(Month);
                        break;
                }
            }
            if(Jan.Count > 0)
            {
                MonthsList.Add(Jan);
            }
            if (Feb.Count > 0)
            {
                MonthsList.Add(Feb);
            }
            if (Mar.Count > 0)
            {
                MonthsList.Add(Mar);
            }
            if (May.Count > 0)
            {
                MonthsList.Add(May);
            }
            if (Jun.Count > 0)
            {
                MonthsList.Add(Jun);
            }
            if (Jul.Count > 0)
            {
                MonthsList.Add(Jul);
            }
            if (Aug.Count > 0)
            {
                MonthsList.Add(Aug);
            }
            if (Sep.Count > 0)
            {
                MonthsList.Add(Sep);
            }
            if (Oct.Count > 0)
            {
                MonthsList.Add(Oct);
            }
            if (Nov.Count > 0)
            {
                MonthsList.Add(Nov);
            }
            if (Dec.Count > 0)
            {
                MonthsList.Add(Dec);
            }
            MonthsList.Reverse();
            return MonthsList;
        }
    }
}
