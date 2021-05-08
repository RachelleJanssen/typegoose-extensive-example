import express from "express";
import { HTTPRESPONSESTATUS } from "../libs/constants";
import { ResponseBody, responseHandler } from "../libs/express/expressHandler";
import handleError from "../libs/express/handleError";
import { DepartmentService } from "../services/department.service";

export class DepartmentController {
  public static async listDepartmentsHandler(_req: express.Request, res: express.Response): Promise<void> {
    try {
      const result = await DepartmentService.listDepartments();

      const response: ResponseBody = {
        status: HTTPRESPONSESTATUS.SUCCESS,
        body: result.map((departmentResult) => departmentResult.toJSON()),
      };

      return responseHandler(res, response, 200);
    } catch (error) {
      return handleError(error, res);
    }
  }

  public static async createDepartmentHandler(req: express.Request, res: express.Response): Promise<void> {
    try {
      const newDepartment = req.body;
      const result = await DepartmentService.createDepartment(newDepartment)
      const response: ResponseBody = {
        status: HTTPRESPONSESTATUS.SUCCESS,
        body: result.toJSON(),
      };

      return responseHandler(res, response, 201);
    } catch (error) {
      return handleError(error, res);
    }
  }

  public static async getByIdHandler(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { departmentId } = req.params;
      const result = await DepartmentService.getById(departmentId);

      const response: ResponseBody = {
        status: HTTPRESPONSESTATUS.SUCCESS,
        body: result.toJSON(),
      };

      return responseHandler(res, response, 200);
    } catch (error) {
      return handleError(error, res);
    }
  }

  public static async updateByIdHandler(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { departmentId } = req.params;
      const updateDepartment = req.body;
      const updatedDepartment = await DepartmentService.updateById(departmentId, updateDepartment);

      const response: ResponseBody = {
        status: HTTPRESPONSESTATUS.SUCCESS,
        body: updatedDepartment.toJSON(),
      };
      return responseHandler(res, response, 204);
    } catch (error) {
      return handleError(error, res);
    }
  }

  public static deleteByIdHandler(_req: express.Request, res: express.Response): Promise<void> {
    try {
      const response: ResponseBody = {
        status: HTTPRESPONSESTATUS.ERROR,
        error: { message: "Function not implemented yet, check back later", name: "Function not implemented"}
      }
      return responseHandler(res, response, 500);
    } catch (error) {
      return handleError(error, res);
    }
  }
}
