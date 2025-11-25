//State variables
let firstNum = '';
let secondNum = '';
let operator = '';
let displayValue = '';

let display = document.getElementsByClassName("screen")[0];
let buttons = document.getElementsByClassName("btn");


//Functions
let add = (a, b) => {
    return a + b;
};

let subtract = (a, b) => {
    return a - b;
};

let multiply = (a, b) => {
    return a * b;
};

let divide = (a, b) => {
    return a / b;
};

let operate = (operator, a, b) => {
    if (operator === '+') {
        return add(a, b);
    } if (operator === '-') {
        return subtract(a, b);
    } if (operator === '*') {
        return multiply(a, b);
    } if (operator === '/') {
        return divide(a, b);
    }
};

let populate = (number) => {
    displayValue += number;
    display.value = displayValue;
};


//Event listeners
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let value = event.target.textContent; // targets the text content within the buttons element 

    // Detect button values
        if (!isNaN(value)) {
            populate(value);
        } else if (value === '+' || value === '-' || value === '*' || value === '/'){
            firstNum = displayValue;
            operator = value;
            displayValue  = ''; 
            display.textContent = '';
        } else if(value === '='){
            secondNum = displayValue;
            let result = (operate(operator, Number(firstNum), Number(secondNum)));
            displayValue = result;
            display.value = displayValue; //.value for input fiels otherwise .textContent

            //store result as a firstNum for the next calculation
            firstNum = result; 
        } else if (value === "AC"){
            //reset all of the values 
            displayValue = '';
            firstNum = '';
            secondNum = '';
            operator = '';
            display.value = displayValue;
        }
    });
};

//store values 
