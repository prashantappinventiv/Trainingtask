// import express from 'express';
// const router = express.Router();
// import { userController} from '../controller/user_controller';

// // Route for inserting a new user
// const newLocal = router.post('/users', userController);

// export default newLocal;

// import express from 'express';
// import singin from '../controller/user_controller'

// const router = express.Router();
// import userController from '../controller/user_controller';

// // Route for inserting a new user
//  router.post('/users', singin);



// export default router;

import { Router } from 'express';
import { signin } from '../controller/user_controller';
import { validateSignin } from '../validation/sign';
import { loginHandler } from '../controller/login_controller';
import { jwtAuthorisation } from '../middleware/jwt-authorisation';


const AuthRouter = Router();

AuthRouter.post('/signin', jwtAuthorisation, signin);
AuthRouter.post('/login', loginHandler)

export default AuthRouter;
