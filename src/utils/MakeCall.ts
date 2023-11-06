import express from "express";
import { AppRequest } from "@NodeService/useRouter";

type ApiEndpoint = (_a: AppRequest) => any;

export default (call: ApiEndpoint) =>
  (req: express.Request, res: express.Response) =>
    call({ req, res });
