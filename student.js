const express=require('express')
const router=express.Router();
router.get("/appinventiv",(req,res,next)=>{
    res.send("whats app guys")
    res.end()
})
router.get("/about",(req,res,next)=>{
    res.send("this is about me")
    res.end()
})
router.get("/contact",(req,res)=>{
    res.send("this is my contact no:-9548553650")
    res.end()
})
module.exports=router;
   