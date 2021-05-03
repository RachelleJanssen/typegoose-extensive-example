import { prop, Ref, getModelForClass } from "@typegoose/typegoose";

import { StaffMember } from "./staffMember";
import { Student } from "./student";

export class Class {
  @prop({ required: true, unique: true })
  public name!: string;

  @prop({ ref: () => Student })
  public students?: Ref<Student>[]

  @prop({ required: true, ref: () => StaffMember })
  public classMentor!: StaffMember
}

export const ClassModel = getModelForClass(Class, { schemaOptions: { validateBeforeSave: true } });
