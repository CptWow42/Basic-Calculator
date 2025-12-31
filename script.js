const display = document.getElementById('result');

let currentInput = '0';
let previousInput = '';
let currentOperator = null;
let shouldResetDisplay = false;

function updateDisplay() {
    display.textContent = currentInput;
}

function inputNumber(number) {
    if (currentInput === '0' || shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function inputDecimal() {
    if (shouldResetDisplay) {
        currentInput = '0.';
        shouldResetDisplay = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function handleOperator(operator) {
    const inputValue = parseFloat(currentInput);

    if (currentOperator && !shouldResetDisplay) {
        performCalculation();
    }

    previousInput = currentInput;
    currentOperator = operator;
    shouldResetDisplay = true;
}

function performCalculation() {
    const prevValue = parseFloat(previousInput);
    const currentValue = parseFloat(currentInput);

    if (isNaN(prevValue) || isNaN(currentValue)) {
        alert('Invalid calculation!');
        clearCalculator();
        return;
    }

    let result;

    switch (currentOperator) {
        case 'add':
            result = prevValue + currentValue;
            break;
        case 'subtract':
            result = prevValue - currentValue;
            break;
        case 'multiply':
            result = prevValue * currentValue;
            break;
        case 'divide':
            if (currentValue === 0) {
                alert('Cannot divide by zero!');
                clearCalculator();
                return;
            }
            result = prevValue / currentValue;
            break;
        default:
            return;
    }

    result = Math.round(result * 100000000) / 100000000;
    currentInput = result.toString();
    currentOperator = null;
    previousInput = '';
    shouldResetDisplay = true;
    updateDisplay();
}

function clearCalculator() {
    currentInput = '0';
    previousInput = '';
    currentOperator = null;
    shouldResetDisplay = false;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            if (this.classList.contains('number')) {
                const number = this.getAttribute('data-number');
                inputNumber(number);
            } else if (this.classList.contains('operator')) {
                const action = this.getAttribute('data-action');
                handleOperator(action);
            } else if (this.classList.contains('equals')) {
                performCalculation();
            } else if (this.classList.contains('decimal')) {
                inputDecimal();
            } else if (this.classList.contains('clear')) {
                clearCalculator();
            }
        });
    });
    
    updateDisplay();
});
