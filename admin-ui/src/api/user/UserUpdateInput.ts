import { InputJsonValue } from "../../types";
import { SettingUpdateManyWithoutUsersInput } from "./SettingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  settings?: SettingUpdateManyWithoutUsersInput;
};
