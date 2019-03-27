import { Router as ExpressRouter, RequestHandler } from 'express';

import { Route } from '../interfaces';

export class Router {
  private router: ExpressRouter;

  constructor(routes: Route[]) {
    this.router = ExpressRouter();
    this.applyRoutes(routes);
  }

  private applyRoutes(routes: Route[]) {
    routes.forEach((routeItem) => {
      const { path, verb, handler } = routeItem;
      const middleware = routeItem.middleware || [];

      this.router[verb](path, ...middleware, handler as RequestHandler);
    });
  }

  init(): ExpressRouter {
    return this.router;
  }
}
