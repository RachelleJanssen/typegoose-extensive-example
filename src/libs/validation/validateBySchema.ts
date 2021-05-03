import { Request } from "express";
import joi from "joi";
import throwableError from "../express/throwableError";
import { ObjectHelpers } from "../objecthelpers";

interface ValidRequest<T> extends Request {
  body: T;
}

interface IRequestSchemas {
  /** A joi schema to validate the request parameters */
  paramsSchema?: joi.AnySchema;
  /** A joi schema to validate the request string query values */
  querySchema?: joi.Schema;
  /** A joi schema to validate a request body */
  bodySchema?: joi.AnySchema
}

/**
 * Validate an object with a joi schema
 *
 * @param {Object} object The object to test
 * @param {joi.SchemaLike} schema The joi schema to use
 * @param {boolean} requireAllFields Whether or not all fields are required
 */
const validateObject = <type>(object: Record<string, unknown>, schema: joi.Schema, requireAllFields: boolean = true): type => {
  const objectToValidate = object;

  const result = schema.validate(objectToValidate, {
    abortEarly: false,
    presence: requireAllFields ? "optional" : "required",
  });
  if (result.error) {
    throw throwableError(result.error);
  }
  return (result.value as unknown) as type;
};

/**
 * Validate request using joi schemas
 *
 * @param {} request - The express request to validate
 * @param {IRequestSchemas} schemas - Schemas to validate the express request with, @see IRequestSchemas
 * @returns {ValidRequest<type>} Returnsd a validated request
 */
const validateRequest = <type>(request: Request, schemas?: IRequestSchemas): ValidRequest<type> => {
  if (ObjectHelpers.isNonEmptyObject(request.params) && schemas && schemas.paramsSchema) {
    request.params = validateObject(request.params, schemas.paramsSchema);
  }
  if (ObjectHelpers.isNonEmptyObject(request.query) && schemas && schemas.querySchema) {
    request.query = validateObject(request.query, schemas.querySchema);
  }
  // TODO: try to get an optional type annotation in the body
  if (schemas && schemas.bodySchema) {
    request.body = validateObject<type>(request.body, schemas.bodySchema);
  }
  return request as ValidRequest<type>;
};

/**
 * validate an array of objects with a joi schema (giving a bit more control than the build-in joi functionality)
 * @param {Record<string, unknown>[]} arrayOfObjects The array of objects to test
 * @param {joi.ObjectSchema} schema The joi schema to use
 * @param {boolean} requireAllFields Whether or not all fields are required
 */
// TODO: test if this wrapper function still works in typescript
const validateArray = <type>(arrayOfObjects: Record<string, unknown>[], schema: joi.ObjectSchema, requireAllFields: boolean = true): type[] => arrayOfObjects.map((item) => validateObject<type>(item, schema, requireAllFields));

export { validateObject, validateArray, validateRequest };
