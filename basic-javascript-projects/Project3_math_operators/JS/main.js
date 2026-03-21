
// Add
function addNumbers(){
    let num1 = 5;
    let num2 = 12;

    document.getElementById("Math").innerHTML = num1 + num2;
}

// Subsctract
function substractNumbers(){
    let num1 = 10;
    let num2 = 3

    document.getElementById("substract").innerHTML = num1 - num2;
}

// Multiplication
function multiplication(){
    let math = 2 * 8;

    document.getElementById("multiplication").innerHTML = math;
}

// Division
function division(){
    let math = 8 / 2;

    document.getElementById("division").innerHTML = math;
}

// Operators
function operators(){
    let math = (1 + 2) * 10 / (20 + 87)

    document.getElementById("operators").innerHTML = " 1 plus 2 multiplied by 10 divided twenty plus eighty seven" + math;
}

// Modulus
function modulus(){
    let math = 10 % 4;

    document.getElementById("modulus").innerHTML = math;
}

// Negation
function negation(){
    let math = 10;

    document.getElementById("negation").innerHTML = -math;
}

// Increment
function increment(){
    document.getElementById("increment").innerHTML++;
}
// Decrement
function decrement(){
    document.getElementById("decrement").innerHTML--;
}

// Random and Math Object
function random(){
    let math =  Math.random() * 10
    document.getElementById("random").innerHTML = Math.round(math);
}
