import createUserService from "../services/createUser.service";

const createUserController = (req, res) => {
  const { email, name } = req.body;

  const user = createUserService(email, name);

  return res.status(201).json(user);
};

export default createUserController;
