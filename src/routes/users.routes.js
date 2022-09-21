import { Router } from "express";
import {
  createUserController,
  deleteUserControler,
  listUsersController,
  loginUserController,
  updateUserController,
} from "../controllers/users.controller";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.post("/login", loginUserController);
userRouter.get("", listUsersController);
userRouter.put("/:id", updateUserController);
userRouter.delete("/:id", deleteUserControler);

export default userRouter;
