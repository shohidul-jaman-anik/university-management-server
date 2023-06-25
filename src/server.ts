import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorlogger, logger } from './shared/logger';

process.on('uncaughtException', error => {
  // console.log('Uncaught Exception is detect')
  errorlogger.error(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`);
    });
    logger.info(`Database is Connected Successfully`);
  } catch (error) {
    errorlogger.error(`Failed to connect Database ${error}`);
  }

  process.on('unhandledRejection', error => {
    console.log('Unhandle Rejection is detect');

    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on('SIGTERM', () => {
  logger.info('Signal Termination is received');
  if (server) {
    server.close();
  }
});
