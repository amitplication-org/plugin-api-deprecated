import { UserUpdateManyWithoutTestsInput } from "./UserUpdateManyWithoutTestsInput";

export type TestUpdateInput = {
  users?: UserUpdateManyWithoutTestsInput;
  name?: string | null;
  testNumber?: number | null;
};
