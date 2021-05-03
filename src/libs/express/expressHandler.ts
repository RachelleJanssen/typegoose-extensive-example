import { Request, Response } from "express";

import { CONTENTTYPES, HttpResponseCode, HTTPRESPONSESTATUS } from "../constants";
import { IBaseXMLRequest } from "../models/baseModels";
import baseXMLRequest from "../validation/sharedSchemas";
import { ErrorResponseBody } from "./handleError";
// import { baseXMLRequest } from '../validation/sharedSchemas';
// import { validateObject } from '../validation/validateBySchema';

declare type validResponse = {
  status: HTTPRESPONSESTATUS.SUCCESS,
  body: Record<string, unknown> | Record<string, unknown>[],
}

declare type errorResponse = {
  status: HTTPRESPONSESTATUS.ERROR,
  error: ErrorResponseBody,
}

export declare type ResponseBody = validResponse | errorResponse

/**
 * Handle the request and transform the input into JSON in case it was XML
 * @param {*} request the express request object
 * @returns {Promise<Request>} Returns a request, in the form of a promise, through the express request object
 */
export async function requestHandler(request: Request): Promise<Request> {
  const format = request.headers["content-type"];
  switch (format) {
    case CONTENTTYPES.APPXML:
    case CONTENTTYPES.TEXTXML:
      if (request.method !== "GET") {
        let jsonBody: IBaseXMLRequest = request.body;
        if (!jsonBody) {
          jsonBody = { request: {} };
        }
        request.body = await baseXMLRequest.validate(jsonBody).value;
      }
      break;
    default:
      break;
  }
  return request;
}

/**
 * Handle the express response. Each controller function should use this handler to make sure every branch explicitely sets a statusCode
 *
 * @param {Response} response - The express response object
 * @param {Object} content - The content to display
 * @param {HttpResponseCode} statusCode - The response code to use
 * @returns {Promise<Response>} Returns a response, in the form of a promise, through the express response object
 */
export async function responseHandler(response: Response, responseBody: ResponseBody, statusCode: HttpResponseCode): Promise<void> {
  response.status(statusCode);
  response.json(responseBody);
}
