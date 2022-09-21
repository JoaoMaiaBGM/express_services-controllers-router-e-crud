import users from "../database";

const verifyEmailAvailabilityMiddleware = (req, res, next) => {
  const { email } = req.body;

  const userAlreadyExist = users.find((user) => user.email === email);

  if (userAlreadyExist) {
    return res
      .status(400)
      .json({ message: "This email is already being used" });
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;
