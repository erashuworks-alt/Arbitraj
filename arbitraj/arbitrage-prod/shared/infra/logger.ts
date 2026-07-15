import pino from 'pino';

export const workerLogger = pino({
  level: process.env.LOG_LEVEL || 'error', // Production: error + critical only
});
