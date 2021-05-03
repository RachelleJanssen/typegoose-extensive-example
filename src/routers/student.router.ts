import express, { Router } from "express";

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

    ];
  }

  private static createStudent(): express.RequestHandler[] {
    return [

    ];
  }

  private static getStudent(): express.RequestHandler[] {
    return [

    ];
  }

  private static updateStudent(): express.RequestHandler[] {
    return [

    ];
  }

  private static deleteStudent(): express.RequestHandler[] {
    return [

    ];
  }
}
