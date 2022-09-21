import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUsersService from "../services/users/updateUsers.service";
import deleteUserService from "../services/users/deleteUser.service";

const createUserController = (req, res) => {
  const { email, name } = req.body;

  const user = createUserService(email, name);

  return res.status(201).json(user);
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
};
