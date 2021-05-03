import { prop, Ref } from "@typegoose/typegoose";

import { StaffMember } from "./staffMember";
import { Teacher } from "./teacher";

export class Department {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public budget!: number;

  @prop({ ref: () => Teacher })
  public teachers?: Ref<Teacher>[]

  @prop({ required: true, ref: () => StaffMember })
  public staff!: Ref<StaffMember>[]
}
