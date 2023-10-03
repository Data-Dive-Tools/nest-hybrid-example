import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TCP_MICROSERVICE_TOKEN } from './ microservice.provider';

@Injectable()
export class AppService {
  @Inject(TCP_MICROSERVICE_TOKEN) tcpMicroservice: ClientProxy;

  getHello(): string {
    return 'Hello World!';
  }

  async getAccumulate(query: string): Promise<number> {
    return this.tcpMicroservice.send({ cmd: 'accumulate' }, query).toPromise();
  }
}
