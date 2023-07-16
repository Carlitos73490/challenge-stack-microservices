import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {CheckTokenRequest, CheckTokenResponse, LoginRequest, LoginResponse} from "./stubs/auth-actions/v1/auth-actions";
import {GrpcMethod} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AuthActionsService')
  Login(request : LoginRequest): LoginResponse {

    const response : LoginResponse = {
      token : this.appService.GenerateFakeToken(request.email,request.password)
    }
    return response ;
  }
  @GrpcMethod('AuthActionsService')
   CheckToken(request: CheckTokenRequest): CheckTokenResponse  {
    const response: CheckTokenResponse = {
      valid : this.appService.CheckFakeToken(request.token)
    }
    return response;
  }
}
