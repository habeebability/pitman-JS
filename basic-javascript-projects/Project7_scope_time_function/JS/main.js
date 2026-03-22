// Global variable
let studentName = "Alex";

// Function demonstrating local variable usage
function displayStudentInfo() {

    // Local variable
    let courseName = "Web Development";

    console.log("Student:", studentName);
    console.log("Course:", courseName);
}

// Function with an intentional error for debugging
function calculateFinalScore() {
    let score = 85;

    // Intentional mistake (misspelled variable)
    console.log(scor); // should be "score"
}

// Run functions
displayStudentInfo();
calculateFinalScore();



function checkTime() {
    let hour = new Date().getHours();

    if (hour < 12) {
        document.getElementById("timeMessage").innerHTML = "Good morning!";
    } else {
        document.getElementById("timeMessage").innerHTML = "Good afternoon!";
    }
}


// Check Weather

function checkTemperatureStatus() {
    let temperature = 15;

    if (temperature < 18) {
        document.getElementById("weatherStatus").innerHTML = "It's a bit cold today.";
    }
}


// if else statement.
function checkDiscountEligibility() {
    let age = document.getElementById("userAgeInput").value;

    if (age >= 60) {
        document.getElementById("discountMessage").innerHTML = "You qualify for a senior discount.";
    } else {
        document.getElementById("discountMessage").innerHTML = "You do not qualify for a senior discount.";
    }
}

// else if statement - Time_function
function Time_function(){
    let Time = new Date().getHours();
    let Reply;

    if (Time < 12 == Time > 0){
        Reply = "it is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon."
    }
    else {
        Reply = "it is evening time"
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}