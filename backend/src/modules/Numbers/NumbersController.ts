import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { findClosestFibonacciNumber } from '@shared/functions';
import FiNumber from '@entities/Finumber';
import clientResponse from '../../Middleware/clientResponse';

export const getClosestFiNumber = async (req: Request, res: Response) => {
  const { number } = req.body;
  try {
    const closestNumber: number = findClosestFibonacciNumber(number);
    await FiNumber.create({ number: closestNumber });
    return res.status(200).json(clientResponse({ closestFibonacciNumber: closestNumber }));
  } catch (err) {
    res.status(500).json({ msg: 'server error, try again later' });
  }
};

export const getAllFiNumbers = async (req: Request, res: Response) => {
  try {
    const numbers = await FiNumber.find({});
    return res.status(200).json(clientResponse({ allNumbers: numbers }));
  } catch (err) {
    res.status(500).json({ msg: 'server error, try again later' });
  }
};
