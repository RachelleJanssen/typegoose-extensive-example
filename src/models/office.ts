import { prop, Ref } from "@typegoose/typegoose";

import { Department } from "./department";

export class Office {
  @prop({ required: true })
  public roomNumber!: string

  @prop({ required: true, ref: () => Department })
  public department!: Ref<Department>
}
