import { Router } from "express";
import {
  createUserController,
  deleteUserControler,
  listUsersController,
  loginUserController,
  updateUserController,
} from "../controllers/users.controller";

import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middleware/verifyEmailAvailability.middleware";

const userRouter = Router();

userRouter.post("", verifyEmailAvailabilityMiddleware, createUserController);
userRouter.post("/login", loginUserController);
userRouter.get("", listUsersController);
userRouter.put("/:id", verifyAuthTokenMiddleware, updateUserController);
userRouter.delete("/:id", verifyAuthTokenMiddleware, deleteUserControler);

export default userRouter;
