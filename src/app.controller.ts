import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('acc')
  getAccumulate(@Query('q') query: string): Promise<number> {
    return this.appService.getAccumulate(query);
  }
}
