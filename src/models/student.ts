import { prop, Ref } from "@typegoose/typegoose";

import { Class } from "./class";
import { Course } from "./course";

export class Student {
  @prop({ required: true })
  public firstName!: string;

  @prop({ required: true })
  public lastName!: string;

  @prop({ ref: () => Class, unique: true })
  public class!: Ref<Class>;

  @prop({ ref: () => Course })
  public courses!: Ref<Course>[];
}
