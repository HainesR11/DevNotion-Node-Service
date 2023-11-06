import { AppRequest } from "@NodeService/useRouter";

const errorReposonse = (appRequest: AppRequest, error: unknown) => {
    appRequest.res.status(400).json({
    status: "Failed",
    message: error,
  });
};

export default errorReposonse
