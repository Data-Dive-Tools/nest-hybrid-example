import { Test, TestingModule } from '@nestjs/testing';
import { TcpMicroController } from './tcp-micro.controller';
import { AccumluationService } from './accumulation.service';

describe('MicroserviceController', () => {
  let controller: TcpMicroController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TcpMicroController],
      providers: [AccumluationService],
    }).compile();

    controller = app.get(TcpMicroController);
  });

  describe('accumulate', () => {
    it('should return accumulated value', () => {
      expect(controller.accumulate('3,5')).toBe(8);
    });
  });
});
