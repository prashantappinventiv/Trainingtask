import {Document,Schema} from 'mongoose'
import mongoose from 'mongoose'

interface Fetch extends Document{
name:String,
email:String,
password:String
post:Number,
}

const userschema=new Schema({
    name:{
        type:String,
        required:false
    },

    email:{
        type:String,
        required:true,
         },

         password:{
            type:Number,
            required:false
         }
       
})

export const userFetch=mongoose.model<Fetch>('users',userschema)