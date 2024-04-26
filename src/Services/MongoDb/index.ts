import mongoose from "mongoose";
import dayjs from "dayjs";
// import { useLogger } from "@NodeService/utils/Logger";

export const MongoConnect = (DB: string) => {
  const connect = async () =>
    await mongoose
      .connect(DB, {
        serverSelectionTimeoutMS: 5000,
        // socketTimeoutMS: 1000,
      })
      .then(() => {
        console.log("Database Successfully connected");
      })
      .catch((e) => console.log("---Connection Error---", e));

  // mongoose.connection.on("error", (error) => {
  //   console.log("testing error");
  //   setTimeout(connect, 3000);
  // });

  connect();



  mongoose.connection.on("disconnected", () => {
    // logger.debug(`Mongoose connection disconnected`);
    if (dayjs().hour() >= 9 && dayjs().hour() <= 23) {
      console.log(`Mongoose connection disconnected`);
      setTimeout(connect, 3000);
    }
  });
};
