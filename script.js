script.js

// Get display element
const display = document.getElementById('result');

// Calculator state variables
let currentInput = '0';        // Current display value
let previousInput = '';        // First number in calculation
let currentOperator = null;    // Current operation (+, -, ×, ÷)
let shouldResetDisplay = false; // Flag to reset display on next input

// Update the display
function updateDisplay() {
    display.textContent = currentInput;
}

// Handle number button clicks
function inputNumber(number) {
    // If display shows 0 or we just calculated something, start fresh
    if (currentInput === '0' || shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
    } else {
        // Otherwise, append the number to current input
        currentInput += number;
    }
    updateDisplay();
}

// Handle decimal point
function inputDecimal() {
    if (shouldResetDisplay) {
        currentInput = '0.';
        shouldResetDisplay = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

// Handle operator buttons (+, -, ×, ÷)
function handleOperator(operator) {
    // Convert string to number
    const inputValue = parseFloat(currentInput);

    // If we already have numbers and operator, calculate first
    if (currentOperator && !shouldResetDisplay) {
        performCalculation();
    }

    // Store the first number and operator
    previousInput = currentInput;
    currentOperator = operator;
    shouldResetDisplay = true;
}

// Perform the main calculation
function performCalculation() {
    // Convert strings to numbers
    const prevValue = parseFloat(previousInput);
    const currentValue = parseFloat(currentInput);

    // Validate numbers
    if (isNaN(prevValue) || isNaN(currentValue)) {
        alert('Invalid calculation!');
        clearCalculator();
        return;
    }

    let result;

    // Perform calculation based on operator
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
            // Prevent division by zero
            if (currentValue === 0) {
                alert('Cannot divide by zero!');
                clearCalculator();
                return;
            }
            result = prevValue / currentValue;
            break;
        default:
            return; // No valid operator
    }

    // Round to avoid floating point precision issues
    result = Math.round(result * 100000000) / 100000000;
    
    // Update display with result
    currentInput = result.toString();
    currentOperator = null;
    previousInput = '';
    shouldResetDisplay = true;
    updateDisplay();
}

// Clear calculator (reset all state)
function clearCalculator() {
    currentInput = '0';
    previousInput = '';
    currentOperator = null;
    shouldResetDisplay = false;
    updateDisplay();
}

// Keyboard support
function handleKeyboardInput(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        inputNumber(key);
    } else if (key === '.') {
        inputDecimal();
    } else if (key === '+') {
        handleOperator('add');
    } else if (key === '-') {
        handleOperator('subtract');
    } else if (key === '*') {
        handleOperator('multiply');
    } else if (key === '/') {
        event.preventDefault(); // Prevent browser search shortcut
        handleOperator('divide');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        performCalculation();
    } else if (key === 'Escape' || key === 'Delete') {
        clearCalculator();
    } else if (key === 'Backspace') {
        // Optional: Add backspace functionality
        if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput = '0';
        }
        updateDisplay();
    }
}

// Initialize calculator when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set up button click listeners
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            // Determine button type and call appropriate function
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
    
    // Add keyboard support
    document.addEventListener('keydown', handleKeyboardInput);
    
    // Initial display update
    updateDisplay();
    
    // Log ready message
    console.log('Calculator initialized successfully!');
});