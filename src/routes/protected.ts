import { Router } from 'express';
import authenticate from '../middlewares/auth';

import ProtectedRouteController from '../controllers/ProtectedRouteController';

const protectedRoute = Router();
const protectedController = new ProtectedRouteController();

protectedRoute.use(authenticate);

protectedRoute.get('/', protectedController.index);

export default protectedRoute;
