import { NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport, RpcException, MicroserviceOptions} from '@nestjs/microservices';
import  {join} from 'path';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,

    options: {
      url: `0.0.0.0:5010`,
      package: 'authActions',
      protoPath: join(__dirname, '/proto/auth-actions.proto'),
    },
  });

  await app.listen();
}
bootstrap();
