import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import {
  BigArrayProcessRequest,
  BigArrayProcessResponse,
  BigDbFetchRequest, BigDbFetchResponse
} from "./stubs/benchmark-actions/v1/benchmark-actions";
import { PrismaClient } from '@prisma/client'
import {ChannelCredentials} from "@grpc/grpc-js";
const prisma = new PrismaClient()
import {GrpcTransport} from "@protobuf-ts/grpc-transport";
import {AuthActionsServiceClient} from "./client-stubs/auth-actions/v1/auth-actions.client";





@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('BenchmarkActionsService')
  async BigArrayProcess(request : BigArrayProcessRequest): Promise<BigArrayProcessResponse> {


      // setup a transport and create a client instance
      let transport = new GrpcTransport({
          channelCredentials: ChannelCredentials.createInsecure(),
          host: `localhost:${process.env.NEST_JS_AUTH_SERVICE_PORT}`
      });
      let client = new AuthActionsServiceClient(transport);
      let {response} = await client.checkToken({token : request.token});

      if (response.valid){
          const responseBigArray : BigDbFetchResponse = {
              elapsedTime : `Array process Execution time: ${this.appService.BigArrayProcess(request.arraySize)} ms`
          }
          return responseBigArray
      } else{
          const responseBigArray : BigDbFetchResponse = {
              elapsedTime : `LoginError`
          }
          return responseBigArray
      }


  }
  @GrpcMethod('BenchmarkActionsService')
  async BigDbFetch(request: BigDbFetchRequest): Promise<BigDbFetchResponse> {
     const response: BigDbFetchResponse = {
       elapsedTime: `Db fetch Execution time: ${await this.appService.BigDbFetch()} ms`
     }
     return response;
   }
}
