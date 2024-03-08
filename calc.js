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
   let currentText= displayElement.textContent;

   if(value==='.' && currentText.includes('.')){
      return;
   }

   currentText = currentText === '0' 
   ? value 
   : currentText + value;

   displayElement.textContent = currentText.slice(0,10);

   operator===''
   ? firstNum=parseFloat(currentText)
   : secNum=parseFloat(currentText);
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
   if (operator === '') {
      firstNum = parseFloat(displayElement.textContent);
   } else {
      secNum = parseFloat(displayElement.textContent);
   }
}
function setupEqualListener() {
   const equal = document.querySelector('.equal');
   equal.addEventListener('click', () => {
      calculate();
      showResult();
   });
}

function calculate(){
   firstNum= operate(firstNum,secNum,operator);
   operator='';
}

function showResult() {
   
   displayElement.textContent = String(firstNum).slice(0,10);
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



