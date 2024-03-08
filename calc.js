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
         return add(a, b);
           
       case '-':
         return subtract(a, b);
          
       case '*':
           return multiply(a, b);
           
       case '/':
         return divide(a, b);
           
       default:
           console.error("Invalid operator");
           return NaN;
   }
}

const displayElement = document.querySelector('.display');

function setupNumberListeners() {
   const numbers = document.querySelectorAll('.number');
   numbers.forEach(number => {
      number.addEventListener('click', () => {
         updateNumber(number.textContent);
      });
   });
}

function updateNumber(value) {
   if(value==='.' && displayElement.textContent.includes('.')){
      return;
   }
   if(operator===''){
      displayElement.textContent = displayElement.textContent === '0' 
      ? value 
      : displayElement.textContent + value;
      
      firstNum=Number(displayElement.textContent);

   }else{
      displayElement.textContent = value;
      secNum=Number(displayElement.textContent);
      firstNum= operate(firstNum,secNum,operator);
      operator='';
   }
}

function setupACListener() {
   const ac = document.querySelector('.ac');
   ac.addEventListener('click', () => {
      clearDisplay();
      clearData();
   });
}

function clearDisplay() {
   displayElement.textContent = '0';
}

function clearData() {
   firstNum=0;
   secNum=0;
   operator='';
}

function setupClearListener() {
   const clear = document.querySelector('.clear');
   clear.addEventListener('click', () => {
      clearOneDisplay();
   });
}

function clearOneDisplay() {
   content=displayElement.textContent;
   content.length===2 && content[0]==='-' ?
      clearDisplay() : displayElement.textContent = content.slice(0,content.length -1);
}

function setupSCListener() {
   const sc = document.querySelector('.signChange');
   sc.addEventListener('click', () => {
      invertNumber();
   });
}

function invertNumber() {
   displayElement.textContent = String(Number(displayElement.textContent)*-1);
}
function setupEqualListener() {
   const equal = document.querySelector('.equal');
   equal.addEventListener('click', () => {
      showResult();
   });
}

function showResult() {
   displayElement.textContent = String(firstNum);
}

function setupOperatorListener() {
   const ops = document.querySelectorAll('.operator');
   ops.forEach(op =>{
      op.addEventListener('click', (e) => {
         setOperator(e.target.textContent);
      });
   });
}

function setOperator(op) {
   operator=op;
   clearDisplay();
}

function initializeCalculator() {
   setupNumberListeners();
   setupACListener();
   setupSCListener();
   setupClearListener();
   setupEqualListener();
   setupOperatorListener();
   
}

document.addEventListener('DOMContentLoaded', ()=>
   initializeCalculator()
);

