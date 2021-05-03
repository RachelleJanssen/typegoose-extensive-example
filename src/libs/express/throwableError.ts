import { HttpError } from "../error/customErrors";

/**
 * Returns a custom error object
 * @param {string} errorName The error name
 * @param {Error|string} err The error object or error message
 */
export default function throwableError(err: Error): HttpError {
  return new HttpError(err.message, err.name, 500);
}
