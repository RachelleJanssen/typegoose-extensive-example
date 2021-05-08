import express from "express";
import { HTTPRESPONSESTATUS } from "../libs/constants";
import { ResponseBody, responseHandler } from "../libs/express/expressHandler";
import handleError from "../libs/express/handleError";
import { StudentService } from "../services/student.service";

export class StudentController {
  public static async listStudentsHandler(_req: express.Request, res: express.Response): Promise<void> {
    try {
      const result = await StudentService.listStudents();

      const response: ResponseBody = {
        status: HTTPRESPONSESTATUS.SUCCESS,
        body: result.map((studentResult) => studentResult.toJSON()),
      };

      return responseHandler(res, response, 200);
    } catch (error) {
      return handleError(error, res);
    }
  }

  public static registerStudentHandler(_req: express.Request, res: express.Response): Promise<void> {
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

  public static getByIdHandler(_req: express.Request, res: express.Response): Promise<void> {
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

  public static updateByIdHandler(_req: express.Request, res: express.Response): Promise<void> {
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
