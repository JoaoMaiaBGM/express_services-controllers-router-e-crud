import deleteUserService from "../services/deleteUser.service";

const deleteUserControler = (req, res) => {
  const { id } = req.params;

  const deletedUser = deleteUserService(id);

  return res.status(204).json(deletedUser);
};

export default deleteUserControler;
