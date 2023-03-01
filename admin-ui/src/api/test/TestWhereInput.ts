import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TestWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
  name?: StringNullableFilter;
  testNumber?: IntNullableFilter;
};
