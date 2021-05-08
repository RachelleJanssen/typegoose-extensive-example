import express, { Router } from "express";
import { StaffRoleController } from "../controllers";

export class StaffRoleRouter {
  public static router(): Router {
    const router = express.Router();

    router.route("")
      .get(this.listStaffRoles()) // list StaffRoles
      .post(this.createStaffRole()); // create StaffRole
    router.route("/:staffRoleId")
      .get(this.getStaffRole()) // get StaffRole
      .put(this.updateStaffRole()) // update StaffRole
      .delete(this.deleteStaffRole()); // delete StaffRole

    return router;
  }

  private static listStaffRoles(): express.RequestHandler[] {
    return [
      StaffRoleController.listStaffRolesHandler
    ];
  }

  private static createStaffRole(): express.RequestHandler[] {
    return [
      StaffRoleController.createStaffRoleHandler
    ];
  }

  private static getStaffRole(): express.RequestHandler[] {
    return [
      StaffRoleController.getByIdHandler
    ];
  }

  private static updateStaffRole(): express.RequestHandler[] {
    return [
      StaffRoleController.updateByIdHandler
    ];
  }

  private static deleteStaffRole(): express.RequestHandler[] {
    return [
      StaffRoleController.deleteByIdHandler
    ];
  }
}
