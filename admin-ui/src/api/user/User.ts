import { JsonValue } from "type-fest";
import { Setting } from "../setting/Setting";
import { Test } from "../test/Test";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  settings?: Array<Setting>;
  test?: Test | null;
};
