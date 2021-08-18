import { empty, positive, number } from '@shared/custom-validators';
import { body } from 'express-validator';
import errorMsg from '../../shared/error-messages';

const numbers = [
  body('number')
    .exists()
    .withMessage(errorMsg.NUMBER_IS_REQUIRED)
    .custom(empty)
    .withMessage(errorMsg.NUMBER_IS_EMPTY)
    .custom(number)
    .withMessage(errorMsg.SHOULD_BE_NUMBER('value'))
    .custom(positive)
    .withMessage(errorMsg.SHOULD_BE_POSITIVE_NUMBER('value')),
];

export default { numbers };
