import { Injectable, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const {ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';

    res.on('close', () => {
      const {statusCode} = res;

      this.logger.log(
        `[${method}] - ${originalUrl} - ${statusCode} - ${userAgent} ${ip}`
      );
    });

    next();
  }
}
