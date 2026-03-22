function Call_Loop() {
    let seconds = 5;
    let output = "";

    while (seconds > 0) {
        output += "Time remaining: " + seconds + "<br>";
        seconds--;
    }

    output += "Time's up!";

    document.getElementById("loop").innerHTML = output;
}


// List of instruments - For loop
function for_Loop() {
    let instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute"];
    let output = "";

    for (let i = 0; i < instruments.length; i++) {
        output += instruments[i] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = output;
}

// Array function
function arrayFunction() {
    let groceryItems = ["Milk", "Eggs", "Bread", "Apples"];

    // Display multiple values from the array
    document.getElementById("Array").innerHTML =
        "First item: " + groceryItems[0] + "<br>" +
        "Second item: " + groceryItems[1] + "<br>" +
        "Full list: " + groceryItems.join(", ");
}

// Constant function
function constant_function() {
    // Create an object using const
    const carDetails = {
        make: "Toyota",
        model: "Corolla",
        color: "Blue"
    };

    // Change a property value
    carDetails.color = "Red";

    // Add a new property
    carDetails.year = 2022;

    // Display the changed and added property values
    document.getElementById("Constant").innerHTML =
        "The car is now " + carDetails.color +
        " and was made in " + carDetails.year + ".";
}

// Object assignment
function displayBookInfo() {
    let book = {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,

        // Method inside the object
        getSummary: function () {
            return this.title + " by " + this.author + " (" + this.year + ")";
        }
    };

    document.getElementById("bookSummary").innerHTML = book.getSummary();
}