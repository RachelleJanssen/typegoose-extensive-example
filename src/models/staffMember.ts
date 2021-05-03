import { prop, Ref } from "@typegoose/typegoose";

import { StaffRole } from "./staffRole";

export class StaffMember {
  @prop({ required: true })
  public firstName!: string;

  @prop({ required: true })
  public lastName!: string;

  @prop({ required: true })
  public salary!: number;

  @prop({ required: true, ref: () => StaffRole })
  public role!: Ref<StaffRole>[];
}
