import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import helmet from 'helmet';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import logger from '@shared/Logger';
import router from './routes/mainRouter';

const app = express();
const { BAD_REQUEST } = StatusCodes;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

app.use(cors());

app.use('/api', router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.err(err, true);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

// Export express instance
export default app;
