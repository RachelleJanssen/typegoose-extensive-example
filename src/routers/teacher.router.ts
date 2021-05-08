import express, { Router } from "express";
import { TeacherController } from "../controllers";

export class TeacherRouter {
  public static router(): Router {
    const router = express.Router();

    router.route("")
      .get(this.listTeachers()) // list Teachers
      .post(this.createTeacher()); // create Teacher
    router.route("/:teacherId")
      .get(this.getTeacher()) // get Teacher
      .put(this.updateTeacher()) // update Teacher
      .delete(this.deleteTeacher()); // delete Teacher

    return router;
  }

  private static listTeachers(): express.RequestHandler[] {
    return [
      TeacherController.listTeachersHandler
    ];
  }

  private static createTeacher(): express.RequestHandler[] {
    return [
      TeacherController.registerTeacherHandler
    ];
  }

  private static getTeacher(): express.RequestHandler[] {
    return [
      TeacherController.getByIdHandler
    ];
  }

  private static updateTeacher(): express.RequestHandler[] {
    return [
      TeacherController.updateByIdHandler
    ];
  }

  private static deleteTeacher(): express.RequestHandler[] {
    return [
      TeacherController.deleteByIdHandler
    ];
  }
}
