/**
 * Access Log fields stored in loggly.
 */
export class Log {
  statusCode: number;
  message: string;
  userAgent: string;
  ipAddress: string;
  serviceId: string;
  beforeTime: number; // timestamp
  afterTime: number; // timestamp
  responseTime: number; // ms
  requestUrl: string;
  apiMethod: string;
  level: string;
  response?: string;
  requestPayload?: string;
}
