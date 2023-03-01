import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TeacherListRelationFilter } from "../teacher/TeacherListRelationFilter";

export type TestWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
  name?: StringNullableFilter;
  testNumber?: IntNullableFilter;
  teachers?: TeacherListRelationFilter;
};
