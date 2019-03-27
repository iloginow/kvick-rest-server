import { RequestHandler } from 'express';
import { Router } from '../classes';
import { HTTPVerbs, MiddlewareVerbs } from '../enums';

export interface Route {
  path: string;
  verb: HTTPVerbs | MiddlewareVerbs;
  middleware?: RequestHandler[];
  handler: RequestHandler | Router;
}
