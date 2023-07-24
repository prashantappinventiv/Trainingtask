import mongoose from 'mongoose'
import User from '../model/sign_model'
import Session from '../model/session_model'

const db_connect=()=>{
mongoose.connect('mongodb://localhost:27017/instagram',{

})
.then(()=>{
console.log("connect to mongodb")
User.createCollection();
Session.createCollection();
})

.catch((error)=>{
    console.log("error connected to mongodb")
})
}
export default db_connect;
