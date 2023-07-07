/*
let num1=1;
function calculate(num1:number,num2:number){
    return num1+num2;
}
const ans=calculate(num1,4);
console.log(ans)


function getTotal(numbers:Array<number>){
    return numbers.reduce((acc,itr)=>{
        return acc+itr;
    },0);
}
console.log(getTotal([3,2,1]));


const user={
    firstname:"prashant",
    lastname:"sharma",
    role:'engineer'
};



console.log(user.firstname);

//type alias

type User={
    name:string;
    age:number;
    address?:string;
}

const use:User={
    name:'prashant',
    age:23,
}

function login(userData:User):User{   
    //return userData;
    return userData
}

console.log(login((use)))


type ID=number|string;
const userid:ID='123';
*/

//interfaces
interface Transaction{
    payerAccountNumber:number;
    payeAccountNumber:number;
}

interface BankAccount{
    accountNumber:number;
    accountHolder:string;
    balance:number;
    isActive:boolean;
    transaction:Transaction[]
}
const transaction2:Transaction={
    payerAccountNumber:123,
    payeAccountNumber:415,

}
const bankAccount:BankAccount={
    accountNumber:34567,
    accountHolder:'prashant',
    balance:4000,
    isActive:true,
    transaction:[transaction2]
}