import { CourseNotFoundError } from "../libs/customErrors";
import { databaseModels } from "../libs/databaseModels";
import { Course } from "../models/course";

export class CourseService {
  public static async listCourses() {
    return databaseModels.CourseModel.find({});
  }

  public static async createCourse(courseData: Course) {
    const newCourseResult = new databaseModels.CourseModel(courseData).save();
    if (!newCourseResult) {
      throw CourseNotFoundError;
    }
    return newCourseResult;
  }

  public static async getById(courseId: string) {
    const courseResult = await databaseModels.CourseModel.findById(courseId);
    if (!courseResult) {
      throw CourseNotFoundError;
    }
    return courseResult;
  }

  public static async updateById(courseId: string, courseData: Course) {
    const courseResult = await databaseModels.CourseModel.findByIdAndUpdate(courseId, courseData);
    if (!courseResult) {
      throw CourseNotFoundError;
    }
    return courseResult;
  }

  public static async deleteById(courseId: string): Promise<boolean> {
    const courseResult = await databaseModels.CourseModel.findByIdAndDelete(courseId);
    if (!courseResult) {
      throw CourseNotFoundError;
    }
    return true;
  }
}
