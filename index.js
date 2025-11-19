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
