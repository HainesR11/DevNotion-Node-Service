import { useLogger } from "../utils/Logger";
import { Request, Response, NextFunction } from "express";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  const logger = useLogger()
  logger.info(`{
    Time: ${new Date().toUTCString()},
    Enpoint: ${req.path},
    Status: ${res.statusCode},
    ${req.body && `Body: ${JSON.stringify(req.body)}`}
    ${req.params && `Params: ${JSON.stringify(req.params)}`}
    ${req.query && `Query: ${JSON.stringify(req.query)}`}
  }`);
  next();
};

export default middleware;
