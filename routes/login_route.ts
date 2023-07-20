import express from 'express';
//import singin from '../controller/user_controller'
import { loginHandler} from '../controller/login_controller'

const router = express.Router();

// Route for inserting a new user
 //router.post('/users', singin);

 router.post('/login',loginHandler)



export default router;
