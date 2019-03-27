import * as winston from 'winston';

export class Logger {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: process.env.LOG_LEVEL,
      format: winston.format.combine(
        winston.format.splat(),
        winston.format.simple(),
      ),
      transports: [
        new winston.transports.Console(),
      ],
    });
  }

  info(msg: string): void {
    this.logger.info(msg);
  }
}
