import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TestListRelationFilter } from "../test/TestListRelationFilter";

export type TeacherWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  test?: TestListRelationFilter;
};
