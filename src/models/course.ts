import { prop, Ref } from "@typegoose/typegoose";

import { Student } from "./student";
import { Teacher } from "./teacher";

export enum CourseType {
  MATH = "math",
  CHEMISTRY = "chemistry",
  BIOLOGY = "biology",
  MUSIC = "music",
  HISTORY = "history",
}

export class Course {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true, enum: CourseType })
  public courseType!: CourseType;

  @prop({ required: true })
  public credits!: number;

  @prop({ required: true, ref: () => Teacher })
  public teachers!: Ref<Teacher>[]

  @prop({ ref: () => Student })
  public enrollments?: Ref<Student>[]
}
