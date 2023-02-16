import { JsonValue } from "type-fest";
import { Setting } from "../setting/Setting";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  settings?: Array<Setting>;
};
