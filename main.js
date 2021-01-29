// Get Firstinput values
let inputNumbers = "";
const inputField = document.getElementsByClassName("input")
for (let i = 0; i < inputField.length; i++) {
    const element = inputField[i];

    element.addEventListener("click", function () {
        const inputValue = element.innerText;
        const inputNumber = parseInt(inputValue);
        inputNumbers = inputNumbers + inputNumber;

        // Display the value
        const resultField = document.getElementById("result");
        const resultNumber = parseInt(resultField.innerText);
        resultField.innerText = inputNumbers;
    })

}


function mathOperator(id, operator) {

    document.getElementById(id).addEventListener("click", function () {
        inputNumbers = inputNumbers + operator
        document.getElementById("result").innerText = inputNumbers

    });
}

// plus
mathOperator("plus", "+");
// minus
mathOperator("minus", "-");
// multiply
mathOperator("multiply", "*");
// division
mathOperator("division", "/");


function mathOperation(mathSymbol) {
    let operator = inputNumbers.indexOf(mathSymbol)
    if (operator >= 0) {
        let firstNumb = inputNumbers.slice(0, operator);
        console.log(firstNumb);
        let secandNumb = inputNumbers.slice((operator + 1));
        console.log(secandNumb);
        firstNumb = parseFloat(firstNumb);
        secandNumb = parseFloat(secandNumb);
        let result = document.getElementById("result");
        if (mathSymbol == "+") {
            result.innerText = firstNumb + secandNumb;
        }
        if (mathSymbol == "-") {
            result.innerText = firstNumb - secandNumb;
        }
        if (mathSymbol == "*") {
            result.innerText = firstNumb * secandNumb;
        }
        if (mathSymbol == "/") {
            result.innerText = firstNumb / secandNumb;
        }


    }
}

document.getElementById("equal").addEventListener("click", function () {
    // sum
    mathOperation("+");

    // minus
    mathOperation("-")

    // multiply
    mathOperation("*")

    // division

    mathOperation("/")
})

document.getElementById("all-delete").addEventListener("click", function () {
    document.getElementById("result").innerText = 0;
    inputNumbers = "";
})