import { HttpResponseCode } from "./constants";

export class HttpError extends Error {
  public status: HttpResponseCode;

  constructor(message: string, errorName: string = "Generic Error", status: HttpResponseCode = 500, stack?: string) {
    super(message);

    if (!stack && Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError);
    }
    this.status = status;
    this.name = errorName;
  }
}

export const ClassNotFoundError = new HttpError("No class found", "Class not found", 404);
export const CourseNotFoundError = new HttpError("No course found", "Course not found", 404);
export const DepartmentNotFoundError = new HttpError("No department found", "Department not found", 404);
export const OfficeNotFoundError = new HttpError("No office found", "Office not found", 404);
export const StaffMemberNotFoundError = new HttpError("No staff member found", "Staff member not found", 404);
export const StaffRoleNotFoundError = new HttpError("No staff role found", "Staff role not found", 404);
export const StudentNotFoundError = new HttpError("No student found", "Student not found", 404);
export const TeacherNotFoundError = new HttpError("No teacher found", "Teacher not found", 404);
