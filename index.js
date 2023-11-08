for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
        alert("I got clicked!");

    });
}
function multiply(num1, num2) {
    return num1 * num2;
}
function add(num1, num2) {
    return num1 + num2;
}

function calculator(num1, num2, operator) {    
    return operator(num1, num2)
}
console.log(calculator(2, 3, multiply)); // asking the calculator to multiply 2 and 3 using the multiply function.

