import { Response } from "express";

import { log } from "../logging/logger";
import { ResponseBody, responseHandler } from "./expressHandler";

import { isDev } from "../../env";
import { HttpError } from "../error/customErrors";
import throwableError from "./throwableError";
import { HTTPRESPONSESTATUS } from "../constants";

export declare type ErrorResponseBody = {
  message: string;
  name: string;
  stack?: string;
}

/**
 * Handler for errors
 * @param {Error} err The error object
 * @param {Response} res The expressjs response object
 * @param {string} format The format to display the response, by default shows in application/json format
 */
export default async function handleError(err: Error | HttpError, res: Response): Promise<void> {
  const error = !(err instanceof HttpError) ? throwableError(err) : err;
  const response: ResponseBody = {
    status: HTTPRESPONSESTATUS.ERROR,
    error: {
      name: error.name,
      message: error.message,
    },
  };

  if (isDev) {
    // development error handler
    // will print stacktrace
    response.error.stack = error.stack;
  }
  log().error(JSON.stringify(response));
  return responseHandler(res, response, error.status);
}
