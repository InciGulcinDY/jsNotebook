//Variable:
let number;
let numberDOM;
let result = 1;
let resultDOM;
let numberResultDOM;
let factorialDOM;

function Calculation(){

    //DOM(s):
    numberDOM = document.getElementById('number');
    resultDOM = document.querySelector('#result');
    factorialDOM = document.querySelector('#factorial');

    // Check if the element with id "number" exists
    if (numberDOM) {
        // Parse the innerHTML of the element to get the number
        number = Number(numberDOM.value);
    } else {
        alert("Element with id 'number' not found in the DOM.");
    }

    //Recursive function  
    for(let i=1; i<=number; i++){
        result = result * i;
    }

    resultDOM.innerHTML = 
    ` 
        Factorial of ${number} is ${result}.
    `
}