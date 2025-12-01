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


// Event listeners
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let value = event.target.textContent;

        // Number buttons
        if (!isNaN(value)) {
            populate(value);
        } else if (value === '.') {
            if (!displayValue.includes('.')) {
                if (displayValue === '') {
                    populate('0.');
                } else {
                    populate('.');
                }
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {

            //User typed a number - store it as firstNum
            if (displayValue !== "") {
                firstNum = displayValue;
                displayValue = '';
            }

            //User pressed operator twice - simply replace operator
            operator = value;
            display.value = '';
        }

        // Equals button
        else if (value === '=') {
            secondNum = displayValue;

            // Only calculate if both numbers exist
            if (firstNum !== '' && secondNum !== '') {
                let result = operate(operator, Number(firstNum), Number(secondNum));
                displayValue = result;
                display.value = displayValue;

                // Store result as new firstNum for chaining calculations
                firstNum = result;
            }
        }

        // Clear button
        else if (value === "AC") {
            displayValue = '';
            firstNum = '';
            secondNum = '';
            operator = '';
            display.value = '';
        }
    });
}