import express from "express";
import { v4 as uuidv4 } from "uuid";

const port = 3000;

const users = [];

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const { email, name } = req.body;

  const isAlreadyExist = users.find((user) => user.email === email);

  if (isAlreadyExist) {
    return res
      .status(400)
      .json({ error: "This email adress is already being used" });
  }

  const newUser = {
    email,
    name,
    id: uuidv4(),
  };

  users.push(newUser);

  return res.status(201).json(newUser);
});

app.get("/users", (req, res) => {
  return res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
