import { Router } from "express";
import {
  createUserController,
  deleteUserControler,
  listUsersController,
  updateUserController,
} from "../controllers/users.controller";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("", listUsersController);
userRouter.put("/:id", updateUserController);
userRouter.delete("/:id", deleteUserControler);

export default userRouter;
