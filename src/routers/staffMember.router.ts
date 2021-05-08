import express, { Router } from "express";
import { StaffMemberController } from "../controllers";

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
      StaffMemberController.listStaffmembersHandler
    ];
  }

  private static createStaffMember(): express.RequestHandler[] {
    return [
      StaffMemberController.registerStaffMemberHandler
    ];
  }

  private static getStaffMember(): express.RequestHandler[] {
    return [
      StaffMemberController.getByIdHandler
    ];
  }

  private static updateStaffMember(): express.RequestHandler[] {
    return [
      StaffMemberController.updateByIdHandler
    ];
  }

  private static deleteStaffMember(): express.RequestHandler[] {
    return [
      StaffMemberController.deleteByIdHandler
    ];
  }
}
