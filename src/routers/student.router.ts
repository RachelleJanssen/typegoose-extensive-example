import express, { Router } from "express";
import { StudentController } from "../controllers";

export class StudentRouter {
  public static router(): Router {
    const router = express.Router();

    router.route("")
      .get(this.listStudents()) // list Students
      .post(this.createStudent()); // create Student
    router.route("/:studentId")
      .get(this.getStudent()) // get Student
      .put(this.updateStudent()) // update Student
      .delete(this.deleteStudent()); // delete Student

    return router;
  }

  private static listStudents(): express.RequestHandler[] {
    return [
      StudentController.listStudentsHandler
    ];
  }

  private static createStudent(): express.RequestHandler[] {
    return [
      StudentController.registerStudentHandler
    ];
  }

  private static getStudent(): express.RequestHandler[] {
    return [
      StudentController.getByIdHandler
    ];
  }

  private static updateStudent(): express.RequestHandler[] {
    return [
      StudentController.updateByIdHandler
    ];
  }

  private static deleteStudent(): express.RequestHandler[] {
    return [
      StudentController.deleteByIdHandler
    ];
  }
}
