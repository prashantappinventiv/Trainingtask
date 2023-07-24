import router from 'express'
import {user_detail} from '../controller/Fetch_controller'
import { jwtAuth } from '../middleware/validator';

const fetch=router()
fetch.get('/fetch',user_detail)
export default fetch;
