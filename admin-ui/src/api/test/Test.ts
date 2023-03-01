import { User } from "../user/User";
import { Teacher } from "../teacher/Teacher";

export type Test = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  users?: Array<User>;
  name: string | null;
  testNumber: number | null;
  teachers?: Array<Teacher>;
};
