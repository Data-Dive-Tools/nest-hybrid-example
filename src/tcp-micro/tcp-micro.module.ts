import { Module } from '@nestjs/common';
import { AccumluationService } from './accumulation.service';
import { TcpMicroController } from './tcp-micro.controller';

@Module({
  controllers: [TcpMicroController],
  providers: [AccumluationService],
})
export class TcpMicroModule {}
