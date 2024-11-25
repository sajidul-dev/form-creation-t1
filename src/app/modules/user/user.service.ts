import { IUser } from "./user.interface";
import User from "./user.model";

const createUser = async (user: IUser) => {
  const [result, created] = await User.findOrCreate({
    where: { phone: user.phone },
    defaults: { name: user.name },
  });
  return [result, created];
};

const getUsers = async () => {
  const users = await User.findAll({
    where: {},
    attributes: ["user_id", "name", "phone"],
    order: [["created_at", "DESC"]],
  });

  return users;
};

export const UserService = { createUser, getUsers };
