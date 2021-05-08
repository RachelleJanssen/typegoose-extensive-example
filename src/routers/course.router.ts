import express, { Router } from "express";
import { CourseController } from "../controllers";

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
      CourseController.listCoursesHandler
    ];
  }

  private static createCourse(): express.RequestHandler[] {
    return [
      CourseController.createCourseHandler
    ];
  }

  private static getCourse(): express.RequestHandler[] {
    return [
      CourseController.getByIdHandler
    ];
  }

  private static updateCourse(): express.RequestHandler[] {
    return [
      CourseController.updateByIdHandler
    ];
  }

  private static deleteCourse(): express.RequestHandler[] {
    return [
      CourseController.deleteByIdHandler
    ];
  }
}
