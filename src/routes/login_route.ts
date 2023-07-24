import router from 'express'
import  auth from '../controller/login_controller'
import { jwtAuth } from '../middleware/validator';


const auth_login=router();
auth_login.post('/login',auth)
export default auth_login;