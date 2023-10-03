import { Controller, Inject } from '@nestjs/common';
import { AccumluationService } from './accumulation.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TcpMicroController {
  @Inject(AccumluationService) protected acc: AccumluationService;

  @MessagePattern({ cmd: 'accumulate' })
  accumulate(query: string) {
    return this.acc.accumulate(query);
  }
}
