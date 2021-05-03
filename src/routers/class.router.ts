import express, { Router } from "express";

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
    return [

    ];
  }

  private static createClass(): express.RequestHandler[] {
    return [

    ];
  }

  private static getClass(): express.RequestHandler[] {
    return [

    ];
  }

  private static updateClass(): express.RequestHandler[] {
    return [

    ];
  }

  private static deleteClass(): express.RequestHandler[] {
    return [

    ];
  }
}
