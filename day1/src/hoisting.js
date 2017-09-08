
//Variable Hoisting
//Working example
name = "Lars";

console.log("Hej " + name);

var name;

//Not Working
var firstName = "Lars";

console.log(firstName + lastName);

var lastName = "Andersen";

//Javascript can only hoist declarations, but no initializations.


