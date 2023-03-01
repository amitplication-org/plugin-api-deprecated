import { Test } from "../test/Test";

export type Teacher = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  test?: Array<Test>;
};
