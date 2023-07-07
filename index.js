

//synchronous programming
/*
console.log("script start");
for(let i=1;i<=1000;i++){
    console.log("inside for loop");
}
console.log("script endn")
//drawback blocking of code
*/



//setTimeOut
//Asynchronous programme


/*
console.log("script start");
setTimeout(()=>{
console.log("inside set time out")
},0)
for(let i=0;i<10;i++)
{
console.log("script end")
}


//setTimeout id

console.log("script start")
const id=setTimeout(()=>{
console.log("inside set time out")
},1000)

for(let i=0;i<100;i++)
{
    console.log("...");
}
console.log("settimeout id is",id);
clearTimeout(id);
console.log("script end")


//setInterval
console.log("script start")

setInterval(()=>{
console.log(Math.random());
},1000)
console.log("script end")


//callback

function hello()
{
    console.log("hello")
}

function hello2(callbak)
{
    console.log("second hello")
    callbak();
}
hello2(hello);



//callback in generals


function getTwoNumber(num1,num2,callbak)
{
    console.log(num1+num2) 
    callbak(num1,num2)
}

function addTwoNumber(n1,n2)
{
    console.log(n1+n2)
}

getTwoNumber(4,5,addTwoNumber)

//promises
const bucket=['coffee','chips','vegetables','salt','rice'];
const myPromise=new Promise((resolve,reject)=>{
if(bucket.includes("vegetables")&& bucket.includes("salt")&&bucket.includes("rice"))
{
    resolve("friedRice")
}
else
{
    reject("couldnot complete")
}
})

setTimeout(()=>{
    console.log("hii")
},0)

//consume
myPromise.then((myPromise)=>{
console.log("mypromise is done",myPromise)
},(error)=>{
    console.log(error)
})

for(let i=0;i<100;i++)
{
    console.log(Math.random());
}*/

