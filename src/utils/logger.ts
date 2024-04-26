import { createLogger, transports, format } from "winston";

export const useLogger = () =>
  createLogger({
    transports: [new transports.Console()],
    format: format.simple(),
  });

