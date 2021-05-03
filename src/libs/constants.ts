import { pathToFileURL } from "url";

/**
 * API request content types
 */
export const CONTENTTYPES = {
  PLAINTEXT: "text/plain",
  JSON: "application/json",
  JAVASCRIPT: "application/javascript",
  APPXML: "application/xml",
  TEXTXML: "text/xml",
  HTML: "text/html",
};

/**
 * The file path to the local json storage
 */
export const collectionPath = pathToFileURL(`${__dirname}/localJSONStorage.json`);

/**
 * Valid cards and their values
 */
export enum CardValues {
  HERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
}

/**
 * Valid card deck types
 */
export enum DeckType {
  EMERALD = "Emerald",
  RUBY = "Ruby",
  DIAMOND = "Diamond",
}

/**
 * HTTP response status
 */
export enum HTTPRESPONSESTATUS {
  SUCCESS = "Successful",
  ERROR = "Error"
}

/**
 * HTTP methods
 */
export enum HTTPMETHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  OPTIONS = "OPTIONS",
  HEAD = "HEAD",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export type HttpResponseCode =
  100 |
  101 |
  103 |
  200 |
  201 |
  202 |
  203 |
  204 |
  205 |
  206 |
  300 |
  301 |
  302 |
  303 |
  304 |
  307 |
  308 |
  400 |
  401 |
  402 |
  403 |
  404 |
  405 |
  406 |
  407 |
  408 |
  409 |
  410 |
  411 |
  412 |
  413 |
  414 |
  415 |
  416 |
  417 |
  418 |
  422 |
  425 |
  426 |
  428 |
  429 |
  431 |
  451 |
  500 |
  501 |
  502 |
  503 |
  504 |
  505 |
  506 |
  507 |
  508 |
  510 |
  511
