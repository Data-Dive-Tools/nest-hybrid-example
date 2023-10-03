import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { TcpMicroModule } from 'src/tcp-micro/tcp-micro.module';
import { tcpMicroConfig } from 'src/ microservice.provider';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const tcpMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      TcpMicroModule,
      tcpMicroConfig,
    );
  await tcpMicroservice.listenAsync();
  await app.listen(3000);
}
bootstrap();
