import { Router } from "express";
import {
  usersDelete,
  usersGet,
  usersPatch,
  usersPost,
  usersPut,
  usersPutEmpty,
} from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.get("/", usersGet);

userRouter.put("/:id", usersPut);
userRouter.put("/", usersPutEmpty);

userRouter.post("/", usersPost);

userRouter.delete("/", usersDelete);

userRouter.patch("/", usersPatch);

export default userRouter;
