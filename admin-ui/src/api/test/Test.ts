import { User } from "../user/User";

export type Test = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  users?: Array<User>;
};
