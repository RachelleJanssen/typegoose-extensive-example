export class CustomError extends Error {
  public status: number;

  constructor(message: string, errorName: string = "Generic Error", status: number = 500, stack?: string) {
    super(message);

    if (!stack && Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
    this.status = status;
    this.name = errorName;
  }
}

export const ClassNotFoundError = new CustomError("No class found", "Class not found", 404);
export const CourseNotFoundError = new CustomError("No course found", "Course not found", 404);
export const DepartmentNotFoundError = new CustomError("No department found", "Department not found", 404);
export const OfficeNotFoundError = new CustomError("No office found", "Office not found", 404);
export const StaffMemberNotFoundError = new CustomError("No staff member found", "Staff member not found", 404);
export const StaffRoleNotFoundError = new CustomError("No staff role found", "Staff role not found", 404);
export const StudentNotFoundError = new CustomError("No student found", "Student not found", 404);
export const TeacherNotFoundError = new CustomError("No teacher found", "Teacher not found", 404);
