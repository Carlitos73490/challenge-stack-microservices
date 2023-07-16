/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "authActions";

export interface LoginRequest {
  email?: string | undefined;
  password?: string | undefined;
}

export interface LoginResponse {
  token?: string | undefined;
}

export interface CheckTokenRequest {
  token?: string | undefined;
}

export interface CheckTokenResponse {
  valid?: boolean | undefined;
}

export const AUTH_ACTIONS_PACKAGE_NAME = "authActions";

export interface AuthActionsServiceClient {
  /** Unary */

  login(request: LoginRequest, metadata?: Metadata): Observable<LoginResponse>;

  checkToken(request: CheckTokenRequest, metadata?: Metadata): Observable<CheckTokenResponse>;
}

export interface AuthActionsServiceController {
  /** Unary */

  login(request: LoginRequest, metadata?: Metadata): Promise<LoginResponse> | Observable<LoginResponse> | LoginResponse;

  checkToken(
    request: CheckTokenRequest,
    metadata?: Metadata,
  ): Promise<CheckTokenResponse> | Observable<CheckTokenResponse> | CheckTokenResponse;
}

export function AuthActionsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["login", "checkToken"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthActionsService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthActionsService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_ACTIONS_SERVICE_NAME = "AuthActionsService";
