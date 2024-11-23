import { IUser } from "./user.interface";
import User from "./user.model";

const createUser = async (user: IUser) => {
  const [result, created] = await User.findOrCreate({
    where: { phone: user.phone },
    defaults: { name: user.name },
  });
  return [result, created];
};

export const UserService = { createUser };
