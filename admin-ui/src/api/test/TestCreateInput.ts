import { UserCreateNestedManyWithoutTestsInput } from "./UserCreateNestedManyWithoutTestsInput";
import { TeacherCreateNestedManyWithoutTestsInput } from "./TeacherCreateNestedManyWithoutTestsInput";

export type TestCreateInput = {
  users?: UserCreateNestedManyWithoutTestsInput;
  name?: string | null;
  testNumber?: number | null;
  teachers?: TeacherCreateNestedManyWithoutTestsInput;
};
