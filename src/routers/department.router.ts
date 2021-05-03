import express, { Router } from "express";

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

    ];
  }

  private static createdeparmtment(): express.RequestHandler[] {
    return [

    ];
  }

  private static getdeparmtment(): express.RequestHandler[] {
    return [

    ];
  }

  private static updatedeparmtment(): express.RequestHandler[] {
    return [

    ];
  }

  private static deletedeparmtment(): express.RequestHandler[] {
    return [

    ];
  }
}
