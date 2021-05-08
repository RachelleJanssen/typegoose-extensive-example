import express, { Router } from "express";
import { OfficeController } from "../controllers";

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
      OfficeController.listOfficesHandler
    ];
  }

  private static createOffice(): express.RequestHandler[] {
    return [
      OfficeController.createOfficeHandler
    ];
  }

  private static getOffice(): express.RequestHandler[] {
    return [
      OfficeController.getByIdHandler
    ];
  }

  private static updateOffice(): express.RequestHandler[] {
    return [
      OfficeController.updateByIdHandler
    ];
  }

  private static deleteOffice(): express.RequestHandler[] {
    return [
      OfficeController.deleteByIdHandler
    ];
  }
}
