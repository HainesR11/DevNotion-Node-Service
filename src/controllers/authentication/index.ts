import { User } from "../../Schema";
import jwt from "jsonwebtoken";
import { AppRequest } from "@NodeService/useRouter";
import errorReposonse from "../../utils/ErrorResponse";
import { v4 as uuidV4 } from "uuid";

export const generateToken = async ({ req, res }: AppRequest) => {
  const { email, password } = req.query;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const { name, username, email, actions, id } = user;
      const token = jwt.sign(
        user?.toJSON(),
        `${process.env.MONGO_DB_PASSWORD}`
      );
      const passwordMatch = password === user.password;

      switch (passwordMatch) {
        case true:
          console.log(user);
          return res.status(200).json({
            status: "Success",
            data: {
              OAuth: token,
              actions: actions,
              user: {
                id,
                name,
                username,
                email,
              },
            },
          });
        case false:
          return res.status(404).json({
            status: "Failed",
            message: "Password does not match",
          });
      }
    } else {
      return "";
    }
  } catch (e) {
    return res.json({
      status: "failed",
      error: e,
    });
  }
};

export const createUser = async ({ req, res }: AppRequest) => {
  try {
    const { name, username, email, password, image } = req.body;

    const user = await User.create({
      actions: ["Onboarding", "VerifyEmail"],
      name,
      username: username ? username : `User-${uuidV4().slice(0, 8)}`,
      email,
      password: password,
      image: image ? image : "",
    });

    res.status(201).json({
      Status: "Success",
      Message: "User created",
      data: {
        ...user._doc,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      Status: "Fail",
      message: "Error creating user",
      error: err,
    });
  }
};

export const OTP = ({ req, res }: AppRequest) => {
  try {
    const authCode = Math.random().toFixed(6);

    res.status(200).json({
      status: "Success",
      data: authCode,
    });
  } catch (error) {
    errorReposonse({ req, res }, error);
  }
};
