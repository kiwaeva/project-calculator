let display = document.getElementsByClassName("screen")[0];
let buttons = document.getElementsByClassName("btn");
let displayValue = "";


let populate = (number) => {
    displayValue += number;
    display.textContent = displayValue;
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',(event) => {
    let number = event.target.textContent;
    populate(number);
})
};

let add = (a,b) => {
    return a + b
};

let subtract = (a,b) => {
    return a - b
};

let multiply = (a,b) => {
    return a * b
};

let divide = (a,b) => {
    return a / b ;
}


let firstNum = '';
let secondNum = '';
let operator = '';

let operate = (operator,a,b) => {
    if (operator === '+'){
        return add(a,b)
    } if (operator === '-'){
        return subtract(a,b)
    } if ( operator==='*'){
        return multiply(a,b)
    }if (operator === '/' ){
        return divide(a,b)
    }
}
