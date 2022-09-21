import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUsersService from "../services/users/updateUsers.service";
import deleteUserService from "../services/users/deleteUser.service";
import loginUserService from "../services/users/loginUser.service";

const createUserController = async (req, res) => {
  const { email, name, password } = req.body;

  const user = await createUserService(email, name, password);

  return res.status(201).json(user);
};

const loginUserController = (req, res) => {
  const { email, password } = req.body;

  const login = loginUserService(email, password);

  return res.status(200).json(login);
};

const listUsersController = (req, res) => {
  const users = listUsersService();

  return res.status(200).json(users);
};

const updateUserController = (req, res) => {
  const { id } = req.params;
  const { email, name } = req.body;

  const updateUser = updateUsersService(id, name, email);

  return res.status(200).json(updateUser);
};

const deleteUserControler = (req, res) => {
  const { id } = req.params;

  const deletedUser = deleteUserService(id);

  return res.status(204).json(deletedUser);
};

export {
  updateUserController,
  listUsersController,
  createUserController,
  deleteUserControler,
  loginUserController,
};
