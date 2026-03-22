function showFullMessage() {
    let greeting = "Hello";
    let name = "Jordan";
    let message = greeting.concat(" ", name, "! Welcome to the site.");

    document.getElementById("welcomeMessage").innerHTML = message;
}

// slice method
function slice_method(){
    let Sentence = "All Work and no play makes Johnny a dull boy";
    let Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

// Function to demonstrate the toUpperCase() method
function formatUserName() {
    let userName = "alex thompson";

    // toUpperCase() converts all letters to uppercase
    let formattedName = userName.toUpperCase();

    document.getElementById("nameDisplay").innerHTML =
        "Formatted Name: " + formattedName;
}


// Function to demonstrate the search() method
function findKeywordInMessage() {
    let message = "Your order has been shipped and is on the way.";

    // search() finds the position of a word in a string
    let position = message.search("shipped");

    document.getElementById("searchResult").innerHTML =
        "The word 'shipped' was found at position: " + position;
}

// string methods function
function string_Method(){
    let x = 182;
    document.getElementById("Numbers_to_String").innerHTML = x.toString();
}

// to precision example
function showRoundedValue() {
    let productPrice = 12.34567;

    // toPrecision() formats the number to a specified total number of digits
    let formattedPrice = productPrice.toPrecision(4);

    document.getElementById("priceDisplay").innerHTML =
        "Formatted Price: " + formattedPrice;
}

// Function to demonstrate the toFixed() method
function formatAccountBalance() {
    let balance = 245.6789;

    // formats the number to a fixed number of decimal places
    let formattedBalance = balance.toFixed(2);

    document.getElementById("balanceOutput").innerHTML =
        "Formatted Balance: £" + formattedBalance;
}


// valueOf() method
function displayPrimitiveValue() {
    let orderTotal = new Number(99.99);

    // returns the primitive value of the object
    let primitiveValue = orderTotal.valueOf();

    document.getElementById("valueOutput").innerHTML =
        "Order Total Value: £" + primitiveValue;
}