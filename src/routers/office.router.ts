import express, { Router } from "express";

export class OfficeRouter {
  public static router(): Router {
    const router = express.Router();

    router.route("")
      .get(this.listOffices()) // list offices
      .post(this.createOffice()); // create office
    router.route("/:officeId")
      .get(this.getOffice()) // get office
      .put(this.updateOffice()) // update office
      .delete(this.deleteOffice()); // delete office

    return router;
  }

  private static listOffices(): express.RequestHandler[] {
    return [

    ];
  }

  private static createOffice(): express.RequestHandler[] {
    return [

    ];
  }

  private static getOffice(): express.RequestHandler[] {
    return [

    ];
  }

  private static updateOffice(): express.RequestHandler[] {
    return [

    ];
  }

  private static deleteOffice(): express.RequestHandler[] {
    return [

    ];
  }
}
