import './pre-start'; // Must be the first import
import config from './config';
import mongoose from 'mongoose';
import app from '@server';
import logger from '@shared/Logger';

mongoose
  .connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(config.port, () => logger.info(`Express server started on port ${config.port}`)))
  .catch((error) => logger.err(error.message));

mongoose.set('useFindAndModify', false);
