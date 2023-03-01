import { User } from "../user/User";

export type Test = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  users?: Array<User>;
  name: string | null;
  testNumber: number | null;
};
