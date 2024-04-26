import useRouter from "./useRouter";
import { MongoConnect } from "./Services/MongoDb/index";
import express from "express";
import requestLogger from "./middelware/requestLogger";

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "dev") {
  app.use(requestLogger);
}

const connectionString = process.env.MONGO_DB_DATABASE?.replace(
  "<password>",
  `${process.env.MONGO_DB_PASSWORD}`
);


MongoConnect(connectionString as string);

useRouter(app);


const port = process.env.PORT || "2812";

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
