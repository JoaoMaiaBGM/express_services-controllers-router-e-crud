import updateUsersService from "../services/updateUsers.service";

const updateUserController = (req, res) => {
  const { id } = req.params;
  const { email, name } = req.body;

  const updateUser = updateUsersService(id, name, email);

  return res.status(200).json(updateUser);
};

export default updateUserController;
