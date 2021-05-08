import { DepartmentNotFoundError } from "../libs/customErrors";
import { databaseModels } from "../libs/databaseModels";
import { Department } from "../models/department";

export class DepartmentService {
  public static async listDepartments() {
    return databaseModels.DepartmentModel.find({});
  }

  public static async createDepartment(departmentData: Department) {
    const newDepartmentResult = new databaseModels.DepartmentModel(departmentData).save();
    if (!newDepartmentResult) {
      throw DepartmentNotFoundError;
    }
    return newDepartmentResult;
  }

  public static async getById(departmentId: string) {
    const departmentResult = await databaseModels.DepartmentModel.findById(departmentId);
    if (!departmentResult) {
      throw DepartmentNotFoundError;
    }
    return departmentResult;
  }

  public static async updateById(departmentId: string, departmentData: Department) {
    const departmentResult = await databaseModels.DepartmentModel.findByIdAndUpdate(departmentId, departmentData);
    if (!departmentResult) {
      throw DepartmentNotFoundError;
    }
    return departmentResult;
  }

  public static async deleteById(departmentId: string): Promise<boolean> {
    const departmentResult = await databaseModels.DepartmentModel.findByIdAndDelete(departmentId);
    if (!departmentResult) {
      throw DepartmentNotFoundError;
    }
    return true;
  }
}
