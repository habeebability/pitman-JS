let x = "X"

document.writeln(typeof x)

document.writeln(x == "X")


function addNan(){
    let math = 5 - x;
    document.getElementById("nan").innerHTML = "5-x = " +math
    document.getElementById("isNum").innerHTML = "isNan(5-x) = "  + isNaN(math)
    document.getElementById("isNotNum").innerHTML = "isNotNum(5) = "  + isNaN(5)



}


function infinity(){
    document.getElementById("posInfinity").innerHTML = (3E310);
    document.getElementById("negInfinity").innerHTML = (-3E310);
}


const isLesser = 2 > 5
document.writeln( "2 > 5 = " + isLesser)

const isGreater = 5 > 2
document.writeln( "5 > 2 = " + isGreater)


console.log( 4 + 5)

// Boolean and console

console.log( 2 == "7")



// Double equals
console.log( "2" === "2");

console.log("5 " === 5)


function checkLogic() {

    // AND operator
    let andTrue = (5 > 2 && 10 > 3);   // true
    let andFalse = (5 > 10 && 10 > 3); // false

    // OR operator
    let orTrue = (5 > 10 || 10 > 3);   // true
    let orFalse = (5 > 10 || 10 > 20); // false

    // Display results
    document.getElementById("Math").innerHTML =
        "AND (true case): " + andTrue + "<br>" +
        "AND (false case): " + andFalse + "<br><br>" +
        "OR (true case): " + orTrue + "<br>" +
        "OR (false case): " + orFalse;
}