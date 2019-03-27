import express from 'express';

import { Logger } from './Logger';
import { Router } from './Router';
import { basicMiddleware } from '../utils/basic-middleware';
import { AppContext } from '../interfaces';

export class App {
  private app: express.Application;
  private middleware: express.RequestHandler[];
  private router: express.Router;
  private name: string;
  private port: number;
  logger: Logger;

  constructor(ctx: AppContext, router: Router, middleware: express.RequestHandler[] = []) {
    this.app = express();
    this.name = ctx.name;
    this.port = ctx.port;
    this.middleware = middleware;
    this.logger = new Logger();
    this.router = router.init();
  }

  private applyMiddleware(): void {
    const middleware = [...basicMiddleware, ...this.middleware, this.router];

    middleware.forEach((middlewareItem) => {
      this.app.use(middlewareItem);
    });
  }

  run() {
    this.app.listen(this.port, (): void => {
      this.logger.info(`${this.name} is running on port ${this.port}`);
    });
  }
}
