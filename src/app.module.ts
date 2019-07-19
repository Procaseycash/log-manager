import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LogInterceptor } from './interceptors/log.interceptor';
import { LogService } from './services/log.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    LogService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LogInterceptor,
    },
    ],
})
export class AppModule {
}
