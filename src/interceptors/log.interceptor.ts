import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LogService } from '../services/log.service';

/**
 *  This is used to intercept request and response in order to log any process.
 *  This interceptor has access to both failed and successful response.
 *  The response is access through the help observable
 */
@Injectable()
export class LogInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, call$: CallHandler<any>): Observable<any> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    const beforeTime = Date.now();
    return call$.handle().pipe(
      tap((res) => LogService.success(req, res, beforeTime),
        (err) => LogService.error(req, err, beforeTime)),
    );
  }
}
