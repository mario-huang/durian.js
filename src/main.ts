import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '../platform-fastify';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(PORT);
  Logger.log(`Listening on http://localhost:${PORT} ...`);
  // this is only for bench, you should delete it.
  // if (process.env['isDurianBench'] === 'true') {
  //   await app.close();
  // }
}
bootstrap();
