import { Injectable } from '@nestjs/common';
import { routeStrategy } from './utils';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  postHello(): string {
    return 'Created all';
  }

  deleteHello(id: string): string {
    return 'Delete all ' + id;
  }

  updateHello(id: string): string {
    return 'Update all ' + id;
  }

  patchHello(): string {
    return 'Patch hello World!';
  }

  /**
   * This is the major service needed here
   * Others are for test purpose to see if routing strategy works and request are directed here.
   * @param req
   */
  async allRoutes(req: any) {
    // All route will be redirected to this @All strategy where we will then route all requests to
    return await routeStrategy(req);
  }
}
