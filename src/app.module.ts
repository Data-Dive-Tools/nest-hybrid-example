import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tcpMicroserviceProvider } from './ microservice.provider';
import { TcpMicroModule } from './tcp-micro/tcp-micro.module';

@Module({
  imports: [tcpMicroserviceProvider(), TcpMicroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
