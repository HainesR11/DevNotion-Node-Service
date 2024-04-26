import { User } from "../../Schema";
import { AppRequest } from "../../useRouter";
// import { logger } from "../../utils/logger";

export const updateUser = async ({ req, res }: AppRequest) => {
  const { id } = req.params;
  const { params } = req.body;
  try {

    const user = await User.findByIdAndUpdate(
      {
        _id: id,
      },
      { ...params },
      {
        new: true,
        runValidators: true,
      }
    ).catch((err) => {
      throw {
        Status: "Fail",
        name: "Error creating user",
        error: err,
      };
    });
    res.status(202).json({
      Status: "Success",
      Message: "User Updated",
      data: {
        ...user?._doc,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
