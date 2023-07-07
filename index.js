const express=require('express');

const app=express();
app.use(express.json());
/*app.get('/add',(req,res)=>{
    let n1=3;
    let n2=4;
    let sum=n1+n2;
res.send(`${sum}`);
});*/

app.post('/add',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let sum=n1+n2;
    res.send(`sum=${sum}`);
})

app.post('/sub',(req,res)=>{
    let sub=0;
    let n1=req.body.num1;
    let n2=req.body.num2;
    sub=n1-n2;
    res.send(`sub=${sub}`);

})

app.post('/mul',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let mul=n1*n2;
    res.send(`multiplication is ${mul}`);
})
app.listen(3000);

app.post('/div',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let div=n1/n2;
    res.send(`Div is ${div}`);
})

app.post('/squareroot',(req,res)=>{
    let n1=req.body.num1;
    let sqrt=Math.sqrt(n1);
    res.send(`square root is${sqrt}`);
})

app.post('/pow',(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    let power=Math.pow(n1,n2);
    res.send(`power of a number is ${power}`);
})

app.post('/log',(req,res)=>{
    let n1=req.body.num1;
    let log=Math.log(n1);
    res.send=(`the value of log is ${log}`);
    res.end();
})

