import {
  Express, NextFunction, Request, Response,
} from "express";
import handleError from "./express/handleError";

import { HttpError } from "./error/customErrors";

/**
 * Function that returns a new 404 error
 * @param {Request} req Express request
 */
function createNotFoundError(req: Request): HttpError {
  return new HttpError(`404: ${req.method} ${req.url} Not Found`, "404 error", 404);
}
/**
 * Initialize 404 requests
 * @param {*} app The expressjs app
 */
export default function initNotFound(app: Express): void {
  app.get("*", async (req: Request, res: Response) => {
    const err = createNotFoundError(req);
    await handleError(err, res);
  });

  app.post("*", async (req: Request, res: Response) => {
    const err = createNotFoundError(req);
    await handleError(err, res);
  });

  app.put("*", async (req: Request, res: Response) => {
    const err = createNotFoundError(req);
    await handleError(err, res);
  });

  app.use(async (err: Error, _req: Request, res: Response, next: NextFunction) => {
    await handleError(err, res);
    next();
  });
}
