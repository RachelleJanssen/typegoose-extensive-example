import express, { Router } from "express";
import { ClassController } from "../controllers";

export class ClassRouter {
  public static router(): Router {
    const router = express.Router();

    router.route("")
      .get(this.listClasses()) // list classes
      .post(this.createClass()); // create class
    router.route("/:classId")
      .get(this.getClass()) // get class
      .put(this.updateClass()) // update class
      .delete(this.deleteClass()); // delete class

    return router;
  }

  private static listClasses(): express.RequestHandler[] {
    console.log('list classes');
    return [
      ClassController.listClassesHandler
    ];
  }

  private static createClass(): express.RequestHandler[] {
    return [
      ClassController.createClassHandler
    ];
  }

  private static getClass(): express.RequestHandler[] {
    return [
      ClassController.getByIdHandler
    ];
  }

  private static updateClass(): express.RequestHandler[] {
    return [
      ClassController.updateByIdHandler
    ];
  }

  private static deleteClass(): express.RequestHandler[] {
    return [
      ClassController.deleteByIdHandler
    ];
  }
}
