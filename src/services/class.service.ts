import { ClassNotFoundError } from "../libs/customErrors";
import { databaseModels } from "../libs/databaseModels";
import { Class } from "../models/class";

export class ClassService {
  public static async listClasses() {
    return databaseModels.ClassModel.find({});
  }

  public static async createClass(classData: Class) {
    const newClassResult = new databaseModels.ClassModel(classData).save();
    if (!newClassResult) {
      throw ClassNotFoundError;
    }
    return newClassResult;
  }

  public static async getById(classId: string) {
    const classResult = await databaseModels.ClassModel.findById(classId);
    if (!classResult) {
      throw ClassNotFoundError;
    }
    return classResult;
  }

  public static async updateById(classId: string, classData: Class) {
    const classResult = await databaseModels.ClassModel.findByIdAndUpdate(classId, classData);
    if (!classResult) {
      throw ClassNotFoundError;
    }
    return classResult;
  }

  public static async deleteById(classId: string): Promise<boolean> {
    const classResult = await databaseModels.ClassModel.findByIdAndDelete(classId);
    if (!classResult) {
      throw ClassNotFoundError;
    }
    return true;
  }
}
