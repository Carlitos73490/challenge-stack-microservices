/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "benchmarkActions";

export interface BigArrayProcessRequest {
  arraySize?: number | undefined;
  token?: string | undefined;
}

export interface BigArrayProcessResponse {
  elapsedTime?: string | undefined;
}

export interface BigDbFetchRequest {
}

export interface BigDbFetchResponse {
  elapsedTime?: string | undefined;
  resultCount?: string | undefined;
}

export const BENCHMARK_ACTIONS_PACKAGE_NAME = "benchmarkActions";

export interface BenchmarkActionsServiceClient {
  /** Unary */

  bigArrayProcess(request: BigArrayProcessRequest, metadata?: Metadata): Observable<BigArrayProcessResponse>;

  bigDbFetch(request: BigDbFetchRequest, metadata?: Metadata): Observable<BigDbFetchResponse>;
}

export interface BenchmarkActionsServiceController {
  /** Unary */

  bigArrayProcess(
    request: BigArrayProcessRequest,
    metadata?: Metadata,
  ): Promise<BigArrayProcessResponse> | Observable<BigArrayProcessResponse> | BigArrayProcessResponse;

  bigDbFetch(
    request: BigDbFetchRequest,
    metadata?: Metadata,
  ): Promise<BigDbFetchResponse> | Observable<BigDbFetchResponse> | BigDbFetchResponse;
}

export function BenchmarkActionsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["bigArrayProcess", "bigDbFetch"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("BenchmarkActionsService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("BenchmarkActionsService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const BENCHMARK_ACTIONS_SERVICE_NAME = "BenchmarkActionsService";
