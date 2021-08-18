import { FiNumber } from '@entities/Finumber';

declare module 'express' {
  export interface Request {
    body: {
      number: number;
    };
  }
}
