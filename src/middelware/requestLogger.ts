import { logger } from "../utils/logger";
import { Request, Response, NextFunction } from "express";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`{
    Time: ${new Date().toUTCString()},
    Enpoint: ${req.path},
    Status: ${res.statusCode},
  }`);
  next();
};

export default middleware;
