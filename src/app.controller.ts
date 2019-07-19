import { All, Controller, Get, Post, Patch, Delete, Put, ParseIntPipe, Param, Response, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiUseTags } from '@nestjs/swagger';

@Controller()
@ApiUseTags('*')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  /**
   * This is where all requests is directed to relying on route strategy
   * request is process down to the calling microService while relying on serviceId in header request.
   * All other api call are for test purposes
   * @param res
   * @param req
   */
  @All()
  async allRoutes(@Response() res, @Request() req) {
    const response: any = await this.appService.allRoutes(req);
    res.status(response.statusCode).json(response);
  }

  @Get('productions')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('medium/posts/latest')
  getMedium(): string {
    return this.appService.getHello();
  }

  @Post('productions')
  postHello(): string {
    return this.appService.postHello();
  }

  @Patch('productions')
  patchHello(): string {
    return this.appService.patchHello();
  }

  @Put('productions/:id')
  updateHello(@Param('id', new ParseIntPipe()) id: string): string {
    return this.appService.updateHello(id);
  }

  @Delete('productions/:id')
  deleteHello(@Param('id', new ParseIntPipe()) id: string): string {
    return this.appService.deleteHello(id);
  }
}
