import express from "express";
import { HTTPRESPONSESTATUS } from "../libs/constants";
import { HttpError } from "../libs/customErrors";
import { ResponseBody, responseHandler } from "../libs/express/expressHandler";
import handleError from "../libs/express/handleError";
import { CourseService } from "../services/course.service";

export class CourseController {
  public static async listCoursesHandler(_req: express.Request, res: express.Response): Promise<void> {
    try {
      const result = await CourseService.listCourses();

      const response: ResponseBody = {
        status: HTTPRESPONSESTATUS.SUCCESS,
        body: result.map((courseResult) => courseResult.toJSON()),
      };

      return responseHandler(res, response, 200);
    } catch (error) {
      return handleError(error, res);
    }
  }

  public static async createCourseHandler(req: express.Request, res: express.Response): Promise<void> {
    try {
      const newCourse = req.body;
      const result = await CourseService.createCourse(newCourse)
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
      const { courseId } = req.params;
      const result = await CourseService.getById(courseId);

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
      const { courseId } = req.params;
      const updateCourse = req.body;
      const updatedCourse = await CourseService.updateById(courseId, updateCourse);

      const response: ResponseBody = {
        status: HTTPRESPONSESTATUS.SUCCESS,
        body: updatedCourse.toJSON(),
      };
      return responseHandler(res, response, 204);
    } catch (error) {
      return handleError(error, res);
    }
  }

  public static async deleteByIdHandler(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { courseId } = req.params;
      const deleted = await CourseService.deleteById(courseId);

      if (deleted === true) {
        const response: ResponseBody = {
          status: HTTPRESPONSESTATUS.SUCCESS,
          body: {
            message: `Course with id ${courseId} was deleted successfully`,
          },
        };
        return responseHandler(res, response, 204);
      }
      throw new HttpError(`Course with id ${courseId} was not deleted successfully`, "Unsuccesful delete", 500);
    } catch (error) {
      return handleError(error, res);
    }
  }
}
