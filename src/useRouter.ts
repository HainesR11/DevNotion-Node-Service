import express, { Express } from "express";
import authRouter from "./Routes/Authentication";
import postRouter from "./Routes/Post";
import userRouter from "./Routes/User";

export interface AppRequest {
  req: express.Request;
  res: express.Response;
}

const useRouter = (app: Express) => {
  app.use("/api/authentication", authRouter);
  app.use("/api/posts", postRouter);
  app.use("/api/user", userRouter);
};

export default useRouter;
