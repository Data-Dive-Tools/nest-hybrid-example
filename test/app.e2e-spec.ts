import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TcpMicroModule } from './../src/tcp-micro/tcp-micro.module';
import { tcpMicroConfig } from './../src/ microservice.provider';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    const tcpMicroModuleFixture: TestingModule = await Test.createTestingModule(
      {
        imports: [TcpMicroModule],
      },
    ).compile();

    const tcpMicro =
      tcpMicroModuleFixture.createNestMicroservice(tcpMicroConfig);

    await tcpMicro.init();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/acc (GET)', () => {
    return request(app.getHttpServer())
      .get('/acc?q=3,5')
      .expect(200)
      .expect('8');
  });
});
