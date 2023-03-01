import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SettingListRelationFilter } from "../setting/SettingListRelationFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  settings?: SettingListRelationFilter;
  test?: TestWhereUniqueInput;
};
