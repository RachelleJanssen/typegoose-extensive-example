import {
  Express, NextFunction, Request, Response,
} from "express";
import { log } from "./libs/logging/logger";

import {
  ClassRouter,
  CourseRouter,
  deparmtmentRouter,
  OfficeRouter,
  StaffMemberRouter,
  StaffRoleRouter,
  StudentRouter,
  TeacherRouter,
} from "./routers";
import throwableError from "./libs/express/throwableError";

function logAPIRequest(req: Request, _res: Response, next: NextFunction): void {
  log().info(
    `METHOD: ${req.method}; URL: ${req.url}; Content-Type: ${
      req.headers["content-type"] ? req.headers["content-type"] : "undefined, defaulting to application/json"
    }`,
  );
  next();
}

function cors(_req: Request, res: Response, next: NextFunction): void {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  );
  next();
}

export default function initApi(app: Express, apiBasePath = "/api"): void {
  app.all("*", logAPIRequest); // all API routes are going through the logger
  app.use(cors);
  app.use(`${apiBasePath}/class`, ClassRouter.router());
  app.use(`${apiBasePath}/course`, CourseRouter.router());
  app.use(`${apiBasePath}/department`, deparmtmentRouter.router());
  app.use(`${apiBasePath}/office`, OfficeRouter.router());
  app.use(`${apiBasePath}/staff`, StaffMemberRouter.router());
  app.use(`${apiBasePath}/role`, StaffRoleRouter.router());
  app.use(`${apiBasePath}/student`, StudentRouter.router());
  app.use(`${apiBasePath}/teacher`, TeacherRouter.router());

  app.use((error: Error, _req: Request, _res: Response, _next: NextFunction) => {
    // This is needed so we also pass the error key and data so the frontend can localize the error
    throw throwableError(error);
  });
}
