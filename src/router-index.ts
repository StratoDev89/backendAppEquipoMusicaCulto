import Express from "express";
import { userRouter } from "./users/infraestructure/user-router";
import { songRouter } from "./songs/infraestructure/song-router";
import { verseRouter } from "./verses/infraestructure/verses-router";

export function routerApi(app: Express.Application) {
  const router = Express.Router();
  app.use("/api/v1", router);
  router.use("/users", userRouter);
  router.use("/songs", songRouter);
  router.use("/verses", verseRouter);
}
