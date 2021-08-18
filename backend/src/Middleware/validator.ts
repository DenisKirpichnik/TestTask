import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';
import _ from 'lodash';

import clientResponse from './clientResponse';

/*
 *  Use for validate requests data from client, end validation error if model is not valid
 * */
export default (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
  } else {
    const messageToSend = _.map(errors.mapped(), (errDesc: any) => errDesc.msg);
    res.status(StatusCodes.BAD_REQUEST).json(clientResponse(null, messageToSend));
  }
};
