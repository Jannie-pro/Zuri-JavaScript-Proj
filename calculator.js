const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));
const result = 0;

const operator = prompt("Enter operation you'll like to perform(e.g '+', '-', '*', '/')");

if (operator == '+') {
    result = number1 + number2;
    alert("Your result is", result);
}
else if (operator == '-') {
    result = number1 - number2;
    alert("Your result is", result);
}
else if (operator == '*') {
    result = number1 * number2;
    alert("Your result is", result);
}
else {
    result = number1 / number2;
    alert("Your result is", result);
}