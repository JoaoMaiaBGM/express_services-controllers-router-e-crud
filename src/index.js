import express from "express";
import userRouter from "./routes/users.routes";

const port = 3000;

const app = express();

app.use(express.json());
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
