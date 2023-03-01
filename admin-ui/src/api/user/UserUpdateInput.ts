import { InputJsonValue } from "../../types";
import { SettingUpdateManyWithoutUsersInput } from "./SettingUpdateManyWithoutUsersInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  settings?: SettingUpdateManyWithoutUsersInput;
  test?: TestWhereUniqueInput | null;
};
