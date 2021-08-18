import express from 'express';
import { getClosestFiNumber, getAllFiNumbers } from './NumbersController';
import numberValidationRules from './number.validation';
import validate from '../../Middleware/validator';
// Implement some kind of validation

const router = express.Router();

router.route('/find-fibonacci-number').post(numberValidationRules.numbers, validate, getClosestFiNumber);

router.route('/get-fibonacci-numbers').get(getAllFiNumbers);

export default router;
