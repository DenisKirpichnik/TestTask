import express from 'express';
import numberRouter from '../modules/Numbers/numberRouter';
const router = express.Router();

router.use('/numbers', numberRouter);

export default router;
