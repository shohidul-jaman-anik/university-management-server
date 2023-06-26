import express from 'express';
import { AcademicSemesterRoutes } from '../app/modules/academicSemester/academicSemester.route';
import { UserRoutes } from '../app/modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users/',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters/',
    route: AcademicSemesterRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users/',UserRoutes)
// router.use('/academic-semesters/',AcademicSemesterRoutes)

export default router;
