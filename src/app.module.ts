import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tcpMicroserviceProvider } from './ microservice.provider';

@Module({
  imports: [tcpMicroserviceProvider()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
