import express from "express";
import { HTTPRESPONSESTATUS } from "../libs/constants";
import { HttpError } from "../libs/error/customErrors";
import { ResponseBody, responseHandler } from "../libs/express/expressHandler";
import handleError from "../libs/express/handleError";
import { ClassService } from "../services/class.service";

export class ClassController {
  public static async listClassesHandler(_req: express.Request, res: express.Response): Promise<void> {
    try {
      const result = await ClassService.listClasses();

      const response: ResponseBody = {
        status: HTTPRESPONSESTATUS.SUCCESS,
        body: result.map((classResult) => classResult.toJSON()),
      };

      res.json(response);
      return responseHandler(res, response, 200);
    } catch (error) {
      return handleError(error, res);
    }
  }

  public static async createClassHandler(req: express.Request, res: express.Response): Promise<void> {
    try {
      const newClass = req.body;
      const result = await ClassService.createClass(newClass);
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
      const { classId } = req.params;
      const result = await ClassService.getById(classId);

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
      const { classId } = req.params;
      const updateClass = req.body;
      const updatedClass = await ClassService.updateById(classId, updateClass);

      const response: ResponseBody = {
        status: HTTPRESPONSESTATUS.SUCCESS,
        body: updatedClass.toJSON(),
      };
      return responseHandler(res, response, 204);
    } catch (error) {
      return handleError(error, res);
    }
  }

  public static async deleteByIdHandler(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { classId } = req.params;
      const deleted = await ClassService.deleteById(classId);

      if (deleted === true) {
        const response: ResponseBody = {
          status: HTTPRESPONSESTATUS.SUCCESS,
          body: {
            message: `Class with id ${classId} was deleted successfully`,
          },
        };
        return responseHandler(res, response, 204);
      }
      throw new HttpError(`Class with id ${classId} was not deleted successfully`, "Unsuccesful delete", 500);
    } catch (error) {
      return handleError(error, res);
    }
  }
}
