import express, { Router } from "express";

export class CourseRouter {
  public static router(): Router {
    const router = express.Router();

    router.route("")
      .get(this.listCourses()) // list courses
      .post(this.createCourse()); // create course
    router.route("/:courseId")
      .get(this.getCourse()) // get course
      .put(this.updateCourse()) // update course
      .delete(this.deleteCourse()); // delete course

    return router;
  }

  private static listCourses(): express.RequestHandler[] {
    return [

    ];
  }

  private static createCourse(): express.RequestHandler[] {
    return [

    ];
  }

  private static getCourse(): express.RequestHandler[] {
    return [

    ];
  }

  private static updateCourse(): express.RequestHandler[] {
    return [

    ];
  }

  private static deleteCourse(): express.RequestHandler[] {
    return [

    ];
  }
}
