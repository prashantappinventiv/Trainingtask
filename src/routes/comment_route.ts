import router from 'express'
import { createComment } from '../controller/comment_controller'
import {jwtAuth} from '../middleware/validator'

const create_comment=router()
create_comment.post('/comment',jwtAuth,createComment)
export default createComment