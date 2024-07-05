document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const historyDisplay = document.getElementById('history');
    let currentExpression = '';

    window.appendCharacter = function(character) {
        currentExpression += character;
        display.value = currentExpression;
    };

    window.clearDisplay = function() {
        currentExpression = '';
        display.value = '';
        historyDisplay.textContent = '';
    };

    window.deleteLast = function() {
        currentExpression = currentExpression.slice(0, -1);
        display.value = currentExpression;
    };

    window.calculateResult = function() {
        try {
            const result = eval(currentExpression);
            if (result === Infinity || result === -Infinity) {
                display.value = 'Error';
                currentExpression = '';
            } else {
                historyDisplay.textContent = currentExpression + ' = ' ;
                display.value = result;
                currentExpression = result.toString(); // permite continuar calculando a partir do resultado
            }
        } catch {
            display.value = 'Error';
            currentExpression = '';
        }
    };
});
