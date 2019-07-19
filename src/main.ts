import { Swagger } from './swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogInterceptor } from './interceptors/log.interceptor';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new LogInterceptor());
  app.setGlobalPrefix(process.env.API_VERSION as string);
  Swagger.setup(app);
  await app.listen(port, () =>
    console.log(`Running app services on http://localhost:${port}/
    and\nRunning swagger on http://localhost:${port}/api`));
}

bootstrap();
