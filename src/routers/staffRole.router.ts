import express, { Router } from "express";

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

    ];
  }

  private static createStaffRole(): express.RequestHandler[] {
    return [

    ];
  }

  private static getStaffRole(): express.RequestHandler[] {
    return [

    ];
  }

  private static updateStaffRole(): express.RequestHandler[] {
    return [

    ];
  }

  private static deleteStaffRole(): express.RequestHandler[] {
    return [

    ];
  }
}
