const calculateButton = document.getElementById('calculate');
const inputNumber1 = document.getElementById('number1');
const inputNumber2 = document.getElementById('number2');
const inputOperand = document.getElementById('operand');
function calculate(){
    let result;
    const number1 = parseInt(inputNumber1.value);
    console.log(number1);
    const number2 = parseInt(inputNumber2.value);
    console.log(number2);
    const resultOutput = document.getElementById('result');
    switch (inputOperand.value) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            if (number2 === 0) {
                result = "ERROR Division by 0 is impossible";
            }
            break;
    }
    resultOutput.innerHTML = result;
}
calculateButton.addEventListener('click', calculate);