const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;

        const keyContent = key.textContent;
        const displayNum = display.textContent;

        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            console.log("number key!");
        }
        
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            console.log("operator key!");

            key.classList.add('is-depressed');

            calculator.dataset.previousKeyType = 'operator';

            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }
        
        if (action === 'decimal') {
            console.log("decimal key!");
        }
        
        if (action === 'clear') {
            console.log("clear key!");
        }
        
        if (action === 'calculate') {
            console.log("equal key!");

            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            display.textContent = calculate(firstValue, operator, secondValue);
        }

        const calculate = (n1, operator, n2) => {
            let result = ' ';

            if (operator === 'add') {
                result = parseFloat(n1) + parseFloat(n2);
            } else if (operator === 'subtract') {
                result = parseFloat(n1) - parseFloat(n2);
            } else if (operator === 'multiply') {
                result = parseFloat(n1) * parseFloat(n2);
            } else if (operator === 'divide') {
                result = parseFloat(n1) / parseFloat(n2);
            }

            return result;
        }

        if (!action) {
            if (displayNum === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayNum + keyContent;
            }
        }

        if (action === 'decimal') {
            display.textContent = displayNum + '.';
        }

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

        if (!action) {
            if (displayNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayNum + keyContent;
            }
        }

        if (displayNum.includes('.')) {
            display.textContent = displayNum + '.';
        }
    }
})