import users from "../database";

const updateUsersService = (id, name, email) => {
  const updateUser = {
    id,
    name,
    email,
  };

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  return users[userIndex];
};

export default updateUsersService;
