import users from "../../database";
import { v4 as uuidv4 } from "uuid";
import * as bycrypt from "bcryptjs";

const createUserService = async (email, name, password) => {
  const isAlreadyExist = users.find((user) => user.email === email);

  if (isAlreadyExist) {
    return "This email adress is already being used";
  }

  const hashedPassword = await bycrypt.hash(password, 10); //função hash do bcrypt retorna uma promise, por isso o await

  const newUser = {
    email,
    name,
    password: hashedPassword,
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
