import { serialize } from '../utils';
import { HttpStatus } from '@nestjs/common';
import { Log } from '../entities/Log';
import { logger } from '../utils/logger';

export class LogService {
  /**
   * This is used to log an error type of request - response
   * @param req
   * @param err
   * @param beforeTime
   */
  public static error(req: any, err: any, beforeTime: any) {
    LogService.log(req, err.response, beforeTime, 'ERROR');
  }

  /**
   * This is used to log an success type of request - response
   * @param req
   * @param res
   * @param beforeTime
   */
  public static success(req: any, res: any, beforeTime: any) {
    LogService.log(req, res, beforeTime, 'DEBUG');
  }

  /**
   * The logger structure builder
   * @param req
   * @param response
   * @param beforeTime
   * @param level
   */
  private static log(req: any, response: any, beforeTime: any, level: string) {
    const afterTime = Date.now();
    const { query, body, headers, protocol, originalUrl, method } = req;
    const options: Log = {
      requestUrl: protocol + '://' + headers.host + originalUrl + serialize(query),
      beforeTime,
      afterTime,
      statusCode: response ? response.statusCode : HttpStatus.INTERNAL_SERVER_ERROR,
      message: response ? response.message : '',
      userAgent: headers['user-agent'] || '',
      ipAddress: headers.ipAddress || 'UNKNOWN',
      serviceId: headers.serviceId || 'UNKNOWN',
      responseTime: afterTime - beforeTime,
      requestPayload: body,
      apiMethod: method,
      response: JSON.stringify(response),
      level: level.toLowerCase(),
    };
    // console.log({ options });
    if (level === 'ERROR') {
      logger.error(options);
    } else {
      logger.debug(options);
    }
  }

}
