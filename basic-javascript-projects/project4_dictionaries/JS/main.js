// Dictionary
let user = {
    name: "Habeeb",
    age: 20,
    sound: "Hey"
}

// function getName
function getName(){

    document.getElementById("Dictionary").innerHTML = user.name;
}

// function to delete
function deleteSound(){
    delete user.sound;

        document.getElementById("deleted").innerHTML = user.sound;

}