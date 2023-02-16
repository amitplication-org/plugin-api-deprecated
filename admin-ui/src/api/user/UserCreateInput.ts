import { InputJsonValue } from "../../types";
import { SettingCreateNestedManyWithoutUsersInput } from "./SettingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  settings?: SettingCreateNestedManyWithoutUsersInput;
};
