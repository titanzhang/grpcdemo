require('./codegen/helloworld_pb');
const services = require('./codegen/helloworld_grpc_pb');
const grpc = require('@grpc/grpc-js');

function main() {
    if (process.argv.length < 3) {
        console.log("Enter the message");
        return;
    }
    const message = process.argv[2];

    const client = new services.HelloWorldClient(
        'localhost:5000',
        grpc.credentials.createInsecure());

    const request = new proto.HelloworldService.EchoRequest();
    request.setMessage(message);

    client.echo(request, (err, response) => {
        if (err == null) {
            console.log('Request: ', request.toObject());
            console.log('Response: ', response.toObject());    
        } else {
            console.log("Error: ", err.message || err);
        }
    });
}

main();