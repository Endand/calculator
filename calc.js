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


function performOperation(a, b, op) {
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
   displayElement.textContent = displayElement.textContent === '0' 
   ? value : displayElement.textContent + value;
}

function setupACListener() {
   const ac = document.querySelector('.ac');
   ac.addEventListener('click', () => {
      clearDisplay();
   });
}

function clearDisplay() {
   displayElement.textContent = '0';
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

function initializeCalculator() {
   setupNumberListeners();
   setupACListener();
   setupSCListener();
   setupClearListener();
}

document.addEventListener('DOMContentLoaded', ()=>
   initializeCalculator()
);

