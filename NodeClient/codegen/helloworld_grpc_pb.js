// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var helloworld_pb = require('./helloworld_pb.js');

function serialize_HelloworldService_EchoRequest(arg) {
  if (!(arg instanceof helloworld_pb.EchoRequest)) {
    throw new Error('Expected argument of type HelloworldService.EchoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HelloworldService_EchoRequest(buffer_arg) {
  return helloworld_pb.EchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HelloworldService_EchoResponse(arg) {
  if (!(arg instanceof helloworld_pb.EchoResponse)) {
    throw new Error('Expected argument of type HelloworldService.EchoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HelloworldService_EchoResponse(buffer_arg) {
  return helloworld_pb.EchoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloWorldService = exports.HelloWorldService = {
  echo: {
    path: '/HelloworldService.HelloWorld/Echo',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.EchoRequest,
    responseType: helloworld_pb.EchoResponse,
    requestSerialize: serialize_HelloworldService_EchoRequest,
    requestDeserialize: deserialize_HelloworldService_EchoRequest,
    responseSerialize: serialize_HelloworldService_EchoResponse,
    responseDeserialize: deserialize_HelloworldService_EchoResponse,
  },
};

exports.HelloWorldClient = grpc.makeGenericClientConstructor(HelloWorldService);
