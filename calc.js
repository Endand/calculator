function add(a,b){
   return a+b;
}
function subtract(a,b){
   return a-b;
}
function multiply(a,b){
   return a*b;
}
function divide(a,b){
   return a/b;
}

let firstNum=0;
let secNum=0;
let operator='';


function operate(a, b, op) {
   switch (op) {
       case '+':
           add(a, b);
           break;
       case '-':
           subtract(a, b);
           break;
       case '*':
           multiply(a, b);
           break;
       case '/':
           divide(a, b);
           break;
       default:
           console.error("Invalid operator");
   }
}

function display(){

}
