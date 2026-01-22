/* in case of let and var hoasting can't define,
but reference error occur  if :
console.log(a);
let a=10;

console.log(a); 

*/

const { step } = require("@tensorflow/tfjs-core");

/*console.log(a);
var a=9;

document.writeln(b);
var b=9;*/

/*console.log(a);
let a=10;

console.log(a);*/

/*sum(4,4);  //Not A Number(NaN)

function sum(a,b){
    console.log(a+b);
} */

/*sum(a,b);
var sum =(a,b)=> {console.log(a+b);}
*/
/*
function sum(a,b) //sum: call back function
{
    console.log(a+b);
};
function cal(a,b, ope)// ope: cal bacl argument
{
    ope(a,b); //call back call
};
cal(6,7,sum); //sum: function as a argument
*/

/*console.log("start");
setTimeout(()=>{console.log("Fn, ran after 2")},2000);
console.log("end");*/

//callback hell
function steps(step, callback){
    setTimeout(()=>{console.log("STEP"+step); callback(); },4000);
}
steps(1,steps(2,steps(3)));
