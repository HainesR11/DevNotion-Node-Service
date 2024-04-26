import { AppRequest } from "@NodeService/useRouter";
import { HomePostStub } from "../../Testing/stubs/Posts";
import { TPost } from "@NodeService/utils/types/Post";

export const GetAllPosts = ({ res }: AppRequest) => {
  res.status(200).json({
    status: "SUCCESS",
    data: HomePostStub,
  });
};

export const GetPost = ({ req, res }: AppRequest) => {
  const postId = req.params.id;

  //! Will be repleacing once Database is setup
  const post = HomePostStub.filter((post) => post.id === postId);

  res.status(200).json({
    status: "SUCCESS",
    data: post,
  });
};

export const UpdatePost = ({ req, res }: AppRequest) => {
  const postId = req.params.id;
  const updateBody = req.body;

  //! Will be repleacing once Database is setup
  const post = HomePostStub.filter((post) => post.id === postId);

  const updatedPost = {
    ...post,
    ...updateBody,
  };

  res.status(200).json({
    status: "SUCCESS",
    data: updatedPost,
  });
};

export const LikePost = ({ req, res }: AppRequest) => {
  const postId = req.params.id;
  const likedUser = req.body.user;

  const post: TPost[] = HomePostStub.filter((post) => post.id === postId);

  let updatedPost = {};

  if (post[0].likes.includes(likedUser)) {
    updatedPost = {
      ...post,
      likes: [
        ...post[0].likes.filter((user) => user.username !== likedUser.username),
      ],
    };
  } else {
    updatedPost = {
      ...post,
      likes: [...post[0].likes, likedUser],
    };
  }

  res.status(200).json({
    status: "SUCCESS",
    data: updatedPost,
  });
};
