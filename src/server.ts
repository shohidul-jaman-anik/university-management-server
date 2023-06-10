import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorlogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
    logger.info(`Database is Connected Successfully`)
  } catch (error) {
    errorlogger.error(`Failed to connect Database ${error}`)
  }
}

main()
