import { Router } from 'express';
import sign_in from '../controller/sign_controller'
const authRouter=Router();

authRouter.post('/signup',sign_in)

export default authRouter;