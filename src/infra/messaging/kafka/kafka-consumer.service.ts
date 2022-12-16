import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications-service',
        brokers: ['fast-locust-11008-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZmFzdC1sb2N1c3QtMTEwMDgkos50dLMhX45CRZ057e_oYXlhLJEU1PUTJ8o2GK8',
          password:
            '1qGHSLat-FCfR5SLNtap5KpWPU-AteUbKKCIaf8m-GlyTunLiSNQP8VElplxDGgfo69puA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
