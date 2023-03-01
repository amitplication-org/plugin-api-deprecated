import { TestCreateNestedManyWithoutTeachersInput } from "./TestCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  name?: string | null;
  test?: TestCreateNestedManyWithoutTeachersInput;
};
