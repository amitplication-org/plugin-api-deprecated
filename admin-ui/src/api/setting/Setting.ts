import { User } from "../user/User";

export type Setting = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
};
