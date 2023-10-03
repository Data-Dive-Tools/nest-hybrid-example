import { ClientsModule, Transport } from '@nestjs/microservices';

export const TCP_MICROSERVICE_TOKEN = Symbol('MICRO_SERVICE_TCP');

export const tcpMicroConfig = {
  transport: Transport.TCP,
  options: { port: 3001 },
} as const;

export const tcpMicroserviceProvider = () =>
  ClientsModule.register([
    {
      name: TCP_MICROSERVICE_TOKEN,
      ...tcpMicroConfig,
    },
  ]);
