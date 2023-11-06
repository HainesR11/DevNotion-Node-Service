import express, { Express } from "express";
import authRouter from "./Routes/Authentication";

export interface AppRequest {
  req: express.Request;
  res: express.Response;
}

const useRouter = (app: Express) => {
  app.use("/api/authentication", authRouter);
};

export default useRouter;
