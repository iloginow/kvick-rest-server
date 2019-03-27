import * as bodyParser from 'body-parser';

export const basicMiddleware = [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
];
