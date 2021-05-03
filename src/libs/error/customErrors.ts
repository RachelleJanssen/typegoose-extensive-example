import { HttpResponseCode } from "../constants";

export class HttpError extends Error {
  public status: HttpResponseCode;

  constructor(message: string, errorName: string = "Generic Error", status: HttpResponseCode = 500, stack?: string) {
    super(message);

    if (!stack && Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError);
    }
    this.status = status;
    this.name = errorName;
  }
}

export const gameNotFoundError = new HttpError("No game found", "Game not found", 404);
export const playerNotFoundError = new HttpError("No player found", "Player not found", 404);

export const functionNotImplementedError = new HttpError("function not implemented", "Not implemented", 501);

export const gameOverError = new HttpError("Game over, action not allowed", "Game over error", 400);
