import { NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport, RpcException, MicroserviceOptions} from '@nestjs/microservices';
import  {join} from 'path';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:${process.env.NEST_JS_SELF_PORT}`,
      package: 'benchmarkActions',
      protoPath: join(__dirname, '/proto/benchmark-actions.proto'),
    },

  });

  await app.listen();
}
bootstrap();
