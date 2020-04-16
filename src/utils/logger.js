'use strict';
import path from 'path';
import { createLogger, format, transports } from 'winston';
const { combine, printf, colorize, timestamp } = format;

const loggerFormat = printf(info => {
  const message = info.message ? `${info.message} - ` : '';
  const code = info.code ? `${info.code} - ` : '';
  const path = info.path ? `${info.path} - ` : '';
  const stack = info.stack ? `${info.stack} - ` : '';

  return `${info.level}: ${message}${code}${path}${stack}${info.timestamp}`;
});

const consoleLoggerFormat = printf(info => {
  return `
  ==========================================================
  ${info.level}: ${info.message} ${info.timestamp}
  ==========================================================
  `;
});

const logger = createLogger({
  exitOnError: false,
  transports: [
    new transports.File({
      filename: path.resolve(__dirname, 'error.log'),
      level: 'error',
      format: combine(
        timestamp(),
        loggerFormat
      ),
      handleExceptions: true,
      humanReadableUnhandledException: true
    })
  ]
});

if (process.env.NODE_ENV === 'development') {
  logger.add(
    new transports.Console({
      level: 'info',
      format: combine(
        colorize(),
        timestamp(),
        consoleLoggerFormat
      )
    })
  );
}

export default logger;
