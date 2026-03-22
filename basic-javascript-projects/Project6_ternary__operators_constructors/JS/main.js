function Ride_Function(){
    let Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride += " to ride."
}


// check age challenge
function checkAge() {
    let age = document.getElementById("age").value;

    let message = (age >= 18) 
        ? "You can vote!" 
        : "You are not old enough to vote";

    document.getElementById("result").innerHTML = message;
}


// Keywords and constructors
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
let Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year; 
}