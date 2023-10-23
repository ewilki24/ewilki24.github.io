const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;

        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            console.log("number key!");

            if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }

            calculator.dataset.previousKey = 'number';
        }
        
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            console.log("operator key!");

            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (firstValue && operator && previousKeyType != 'operator' && previousKeyType != 'calculate') {
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = calcValue;
                calculator.dataset.firstValue = calcValue;
            } else {
                calculator.dataset.firstValue = displayedNum;
            }

            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
        }
        
        if (action === 'decimal') {
            console.log("decimal key!");

            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = 0;
            }

            calculator.dataset.previousKey = 'decimal';
        }
        
        if (action === 'clear') {
            console.log("clear key!");

            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = ' ';
                calculator.dataset.modValue = ' ';
                calculator.dataset.operator = ' ';
                calculator.dataset.previousKeyType = ' ';
            } else {
                key.textContent = 'AC';
            }
            display.textContent = 0;
            calculator.dataset.previousKey = 'clear';
        }

        if (action !== 'clear') {
            const clearButton = calculator.querySelector('[data-action=clear]');
            clearButton.textContent = 'CE';
        }
        
        if (action === 'calculate') {
            console.log("equal key!");

            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }

                display.textContent = calculate(firstValue, operator, secondValue);
            }

            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKey = 'calculate';
        }

        const calculate = (n1, operator, n2) => {
            const firstNum = parseFloat(n1);
            const secondNum = parseFloat(n2);
            if (operator === 'add') return firstNum + secondNum;
            if (operator === 'subtract') return firstNum - secondNum;
            if (operator === 'multiply') return firstNum * secondNum;
            if (operator === 'divide') return firstNum / secondNum;
        }

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

        if (displayedNum.includes('.')) {
            display.textContent = displayedNum + '.';
        }

        const resultString = createResultString = (key, displayedNum, state) => {
            const keyContent = key.textContent;
            const {action} = key.dataset;
            const {firstValue, modValue, operator, previousKeyType} = state;

            const keyType = getKeyType(key);
    
            if (!action) {
                return displayedNum === '0' ||
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate' ?
                keyContent : displayedNum + keyContent;
            }
    
            if (action === 'decimal') {
                if (!displayedNum.includes('.')) return displayedNum + '.';
                if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.';
                return displayedNum;
            }
    
            if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
                const firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
    
                return firstValue && operator &&
                previousKeyType !== 'operator' &&
                previousKeyType !== 'calculate' ?
                calculate(firstValue, operator, secondValue) : displayedNum;
            }
    
            if (action === 'clear') return 0;
    
            if (action === 'calculate') {
                const firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                const modValue = calculator.dataset.operator;
    
                return firstValue ? previousKeyType === 'calculate'
                ? calculate(displayedNum, operator, modValue)
                : calculate(firstValue, operator, displayedNum) : displayedNum;
            }
        }

        display.textContent = resultString;

        updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
            const keyType = getKeyType(key);
            calculator.dataset.previousKeyType = keyType;

            const key = e.target;
            const calculatedValue = calculator.dataset.firstValue;

            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
    
            if (!keyType) {
                return displayedNum === '0' ||
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate' ?
                keyContent : displayedNum + keyContent;

                calculator.dataset.previousKeyType = 'number';
            }
    
            if (keyType === 'decimal') {
                if (!displayedNum.includes('.')) return displayedNum + '.';
                if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.';
                return displayedNum;

                calculator.dataset.previousKeyType = 'decimal';
            }
    
            if (keyType === 'operator') {
                key.classList.add('is-depressed');
                calculator.dataset.operator = key.dataset.action;
                calculator.dataset.firstValue = firstValue && operator &&
                previousKeyType !== 'operator' && previousKeyType !== 'calculate' 
                ? calculatedValue : displayedNum;
            }
            
    
            if (action === 'clear') {
                if (key.textContent === 'AC') {
                    calculator.dataset.firstValue = ' ';
                    calculator.dataset.modValue = ' ';
                    calculator.dataset.operator = ' ';
                    calculator.dataset.previousKeyType = ' ';
                } else {
                    key.textContent = 'AC';
                }

                calculator.dataset.previousKeyType = 'clear';
            }   
            
            if (acton !== 'clear') {
                const clearButton = calculator.querySelector('[data-action=clear]');
                clearButton.textContent = 'CE';
            }
    
            if (keyType === 'calculate') {
                calculator.dataset.modValue = firstValue && previousKeyType === 'calculate' ? modValue : displayedNum;

                calculator.dataset.previousKeyType = 'calculate';
            }
        }

        updateVisualState = (key, calculator) => {
            const keyType = getKeyType(key);
            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

            if (keyType === 'operator') key.classList.add('is-depressed')

            if (keyType === 'clear' && key.textContent !== 'AC') {
                key.textContent = 'AC';
            }

            if (keyType !== 'clear') {
                const clearButton = calculator.querySelector('[data-action=clear');
                clearButton.textContent = 'CE';
            }
        }
    }

})

//Maybe functions?
/*if (firstValue && operator) {
    display.textContent = calculate(firstValue, operator, secondValue);
}*/

/*if (!action) {
    if (displayedNum === '0') {
        display.textContent = keyContent;
    } else {
        display.textContent = displayedNum + keyContent;
    }
}*/

/*if (!action) {
    if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
    } else {
        display.textContent = displayedNum + keyContent;
    }
}*/