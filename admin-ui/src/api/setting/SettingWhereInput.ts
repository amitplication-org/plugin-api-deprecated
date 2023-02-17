import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SettingWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
