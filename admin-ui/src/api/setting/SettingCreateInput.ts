import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SettingCreateInput = {
  user?: UserWhereUniqueInput | null;
};
