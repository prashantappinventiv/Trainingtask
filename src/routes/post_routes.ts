import router from 'express'
import {Post} from '../controller/post_controller'
import {jwtAuth} from '../middleware/validator'
const postCreate_=router()
postCreate_.post('/post',jwtAuth,Post)
export default postCreate_;