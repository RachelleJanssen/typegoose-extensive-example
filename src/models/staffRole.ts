import { prop } from "@typegoose/typegoose";

export class StaffRole {
  @prop({ required: true, unique: true })
  public name!: string
}
