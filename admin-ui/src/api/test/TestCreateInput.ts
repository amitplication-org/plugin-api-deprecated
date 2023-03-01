import { UserCreateNestedManyWithoutTestsInput } from "./UserCreateNestedManyWithoutTestsInput";

export type TestCreateInput = {
  users?: UserCreateNestedManyWithoutTestsInput;
  name?: string | null;
  testNumber?: number | null;
};
