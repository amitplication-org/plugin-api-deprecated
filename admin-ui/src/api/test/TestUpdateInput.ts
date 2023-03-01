import { UserUpdateManyWithoutTestsInput } from "./UserUpdateManyWithoutTestsInput";
import { TeacherUpdateManyWithoutTestsInput } from "./TeacherUpdateManyWithoutTestsInput";

export type TestUpdateInput = {
  users?: UserUpdateManyWithoutTestsInput;
  name?: string | null;
  testNumber?: number | null;
  teachers?: TeacherUpdateManyWithoutTestsInput;
};
