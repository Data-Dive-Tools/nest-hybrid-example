import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { tcpMicroConfig } from 'src/ microservice.provider';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(tcpMicroConfig);
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
