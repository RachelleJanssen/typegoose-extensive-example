import express, { Router } from "express";
import { DepartmentController } from "../controllers";

export class deparmtmentRouter {
  public static router(): Router {
    const router = express.Router();

    router.route("")
      .get(this.listdeparmtments()) // list deparmtments
      .post(this.createdeparmtment()); // create deparmtment
    router.route("/:deparmtmentId")
      .get(this.getdeparmtment()) // get deparmtment
      .put(this.updatedeparmtment()) // update deparmtment
      .delete(this.deletedeparmtment()); // delete deparmtment

    return router;
  }

  private static listdeparmtments(): express.RequestHandler[] {
    return [
      DepartmentController.listDepartmentsHandler
    ];
  }

  private static createdeparmtment(): express.RequestHandler[] {
    return [
      DepartmentController.createDepartmentHandler
    ];
  }

  private static getdeparmtment(): express.RequestHandler[] {
    return [
      DepartmentController.getByIdHandler
    ];
  }

  private static updatedeparmtment(): express.RequestHandler[] {
    return [
      DepartmentController.updateByIdHandler
    ];
  }

  private static deletedeparmtment(): express.RequestHandler[] {
    return [
      DepartmentController.deleteByIdHandler
    ];
  }
}
