import { UserCreateNestedManyWithoutTestsInput } from "./UserCreateNestedManyWithoutTestsInput";

export type TestCreateInput = {
  users?: UserCreateNestedManyWithoutTestsInput;
};
