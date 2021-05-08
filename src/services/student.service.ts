import { StudentNotFoundError } from "../libs/customErrors";
import { databaseModels } from "../libs/databaseModels";
import { Student } from "../models/student";

export class StudentService {
  public static async listStudents() {
    return databaseModels.StudentModel.find({});
  }

  public static async createStudent(studentData: Student) {
    const newStudentResult = new databaseModels.StudentModel(studentData).save();
    if (!newStudentResult) {
      throw StudentNotFoundError;
    }
    return newStudentResult;
  }

  public static async getById(studentId: string) {
    const studentResult = await databaseModels.StudentModel.findById(studentId);
    if (!studentResult) {
      throw StudentNotFoundError;
    }
    return studentResult;
  }

  public static async updateById(studentId: string, studentData: Student) {
    const studentResult = await databaseModels.StudentModel.findByIdAndUpdate(studentId, studentData);
    if (!studentResult) {
      throw StudentNotFoundError;
    }
    return studentResult;
  }

  public static async deleteById(studentId: string): Promise<boolean> {
    const studentResult = await databaseModels.StudentModel.findByIdAndDelete(studentId);
    if (!studentResult) {
      throw StudentNotFoundError;
    }
    return true;
  }
}
