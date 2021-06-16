using System;
using Grpc.Net.Client;
using HelloworldService;

namespace Helloworld
{
    class Client
    {
        static void Main(string[] args)
        {
            if (args.Length == 0)
            {
                Console.WriteLine("Enter the message");
                return;
            }

            var msg = args[0];

            // Create gRPC connection
            using (var channel = GrpcChannel.ForAddress("http://127.0.0.1:5000"))
            {
                // Create gRPC client
                var client = new HelloWorld.HelloWorldClient(channel);

                // Call the method
                var request = new EchoRequest { Message = msg };
                var response = client.Echo(request);

                Console.WriteLine($"Request: {request.ToString()}");
                Console.WriteLine($"Response: {response.ToString()}");
            }
        }
    }
}
