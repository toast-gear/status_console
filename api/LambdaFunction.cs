using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace api
{
    public class LambdaFunction : Amazon.Lambda.AspNetCoreServer.APIGatewayProxyFunction
    {
        protected override void Init(IWebHostBuilder builder)
        {
            builder.UseContentRoot(Directory.GetCurrentDirectory())
            .UseStartup<Startup>()
            .UseApiGateway();
        }
    }
}
