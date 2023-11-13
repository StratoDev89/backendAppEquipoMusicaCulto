import express from "express";
import config from "./config";
import { routerApi } from "./router-index";
import database from "./database/mongo-config";
import cors from "cors";

async function bootstrap() {
  const app = express();
  const PORT = config.port;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  routerApi(app);

  app.get("/ping", (_, res) => {
    console.log("Bang");
    res.send("someone pinned here!!");
  });

  await database(
    config.dbConnection,
    config.dbHost,
    config.dbUser,
    config.dbPassword,
    config.dbName
  );

  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
}

bootstrap();
