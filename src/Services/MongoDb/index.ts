const mongoose = require("mongoose");

export const MongoConnect = (DB: string | undefined) => {
  mongoose
    .connect(DB, {})
    .then(() => {
      console.log("Database Successfully connected");
    })
    .catch((e: any) => {
      console.log(`error: ${e}`);
    });
};
