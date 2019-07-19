import * as winston from 'winston';
import { Loggly } from 'winston-loggly-bulk';
import '../custom.env';

/**
 * Winston logging configuration to remotely log all app issues to-fro
 * This settings can be configured using the environment variables.
 */
winston.add(new Loggly({
  token: process.env.WINSTON_TOKEN,
  subdomain: process.env.WINSTON_DOMAIN,
  tags: ['Winston-NodeJS'],
  json: true,
}));
export const logger = winston;
