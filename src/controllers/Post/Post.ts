import { AppRequest } from "@NodeService/useRouter";
import { HomePostStub } from "../../Testing/stubs/Posts";

export const GetAllPosts = ({ res }: AppRequest) => {
  res.status(200).json({
    status: "SUCCESS",
    data: HomePostStub,
  });
};

export const GetPost = ({ req, res }: AppRequest) => {
  const postId = req.params.id;

  const post = HomePostStub.filter((post) => post.id === postId);

  res.status(200).json({
    status: "SUCCESS",
    data: post
  });
};
