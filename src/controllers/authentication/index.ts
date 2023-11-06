import { User } from "../../Schema";
import jwt from "jsonwebtoken";
import { AppRequest } from "@NodeService/useRouter";
import errorReposonse from "../../utils/ErrorResponse";

export const generateToken = async ({ req, res }: AppRequest) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      const { name, username, email } = user;
      const token = jwt.sign(
        user?.toJSON(),
        `${process.env.MONGO_DB_PASSWORD}`
      );
      const passwordMatch = password === user.password;

      switch (passwordMatch) {
        case true:
          return res.status(200).json({
            status: "Success",
            data: {
              OAuth: token,
              user: {
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
      message: e,
    });
  }
};

export const createUser = async ({ req, res }: AppRequest) => {
  try {
    const { name, username, email, password, image } = req.body;

    const user = await User.create({
      name,
      username,
      email,
      password: password,
      image
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
