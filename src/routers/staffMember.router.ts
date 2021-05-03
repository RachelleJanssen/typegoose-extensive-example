import express, { Router } from "express";

export class StaffMemberRouter {
  public static router(): Router {
    const router = express.Router();

    router.route("")
      .get(this.listStaffMembers()) // list StaffMembers
      .post(this.createStaffMember()); // create StaffMember
    router.route("/:staffMemberId")
      .get(this.getStaffMember()) // get StaffMember
      .put(this.updateStaffMember()) // update StaffMember
      .delete(this.deleteStaffMember()); // delete StaffMember

    return router;
  }

  private static listStaffMembers(): express.RequestHandler[] {
    return [

    ];
  }

  private static createStaffMember(): express.RequestHandler[] {
    return [

    ];
  }

  private static getStaffMember(): express.RequestHandler[] {
    return [

    ];
  }

  private static updateStaffMember(): express.RequestHandler[] {
    return [

    ];
  }

  private static deleteStaffMember(): express.RequestHandler[] {
    return [

    ];
  }
}
