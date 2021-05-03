import { getModelForClass } from "@typegoose/typegoose";
import { Class } from "../models/class";
import { Course } from "../models/course";
import { Department } from "../models/department";
import { Office } from "../models/office";
import { StaffMember } from "../models/staffMember";
import { StaffRole } from "../models/staffRole";
import { Student } from "../models/student";
import { Teacher } from "../models/teacher";

export class databaseModels {
  public static readonly ClassModel = getModelForClass(Class);

  public static readonly CourseModel = getModelForClass(Course);

  public static readonly DepartmentModel = getModelForClass(Department);

  public static readonly OfficeModel = getModelForClass(Office);

  public static readonly StaffMemberModel = getModelForClass(StaffMember);

  public static readonly StaffRoleModel = getModelForClass(StaffRole);

  public static readonly StudentModel = getModelForClass(Student);

  public static readonly TeacherModel = getModelForClass(Teacher);
}
