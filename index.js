// Prompt the user to enter their name
var name = prompt("What is your name?");

// Check if the user entered a name
if (name !== null && name !== "") {
    // Display a greeting with the user's name
    alert("Hello, " + name + "! Welcome to our website.");
} else {
    // Display a generic greeting if the user didn't enter a name
    alert("Hello! Welcome to our website.");
}
