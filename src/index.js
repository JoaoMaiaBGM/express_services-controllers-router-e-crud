import express from "express";
import createUserController from "./controllers/createUser.controller";
import deleteUserControler from "./controllers/deleteUser.controller";
import listUsersController from "./controllers/listUsers.controller";
import updateUserController from "./controllers/updateUser.controller";

const port = 3000;

const app = express();

app.use(express.json());

app.post("/users", createUserController);

app.get("/users", listUsersController);

app.put("/users/:id", updateUserController);

app.delete("/users/:id", deleteUserControler);

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
