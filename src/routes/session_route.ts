import router from 'express'
import jwtAuth from '../middleware/validator'
import session from '../controller/session_controller'
const Session=router()
Session.post('/session_',session)
export default Session