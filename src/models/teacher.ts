import { prop, Ref } from "@typegoose/typegoose";
import { Course } from "./course";
import { Office } from "./office";

export class Teacher {
  @prop({ required: true })
  public firstName!: string;

  @prop({ required: true })
  public lastName!: string;

  @prop({ required: true })
  public salary!: number;

  @prop({ required: true, ref: () => Course })
  public courses!: Ref<Course>[]

  @prop({ required: true, ref: () => Office })
  public office!: Ref<Office>[]
}
