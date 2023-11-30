import express, { Express } from "express";
import authRouter from "./Routes/Authentication";
import postRouter from './Routes/Post';

export interface AppRequest {
  req: express.Request;
  res: express.Response;
}

const useRouter = (app: Express) => {
  app.use("/api/authentication", authRouter);
  app.use("/api/posts", postRouter)
};

export default useRouter;
