import express from "express";
import { HTTPRESPONSESTATUS } from "../libs/constants";
import { ResponseBody, responseHandler } from "../libs/express/expressHandler";
import handleError from "../libs/express/handleError";

export class OfficeController {
  public static listOfficesHandler(_req: express.Request, res: express.Response): Promise<void> {
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

  public static createOfficeHandler(_req: express.Request, res: express.Response): Promise<void> {
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
