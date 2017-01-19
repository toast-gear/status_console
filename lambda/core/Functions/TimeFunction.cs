using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializerAttribute(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace core
{
    public class TimeFunctions
    {
        public string GetLocalServerTime_Get(ILambdaContext context)
        {
            return DateTime.Now.ToString("yyyy-MM-dd HH:mm");
        }
        public string Get_UTC_ServerTime_Get(ILambdaContext context)
        {
            return DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm");
        }
    }
}
