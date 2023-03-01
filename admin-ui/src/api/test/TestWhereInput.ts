import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TestWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};
