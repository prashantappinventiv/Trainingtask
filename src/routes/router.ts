// routes.ts

import { Router } from 'express';
import { authController } from '../controller/authentication/authcontroller';

const AuthRouter = Router();

AuthRouter.post('/login', authController.loginHandler);
//AuthRouter.post('/signup',authController)

export default AuthRouter;


