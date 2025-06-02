//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will...
//It expects to receive...
//It will return...

// Declared a boolean variable to track if the temperature is too cold
var isTooCold = false;

// Created a function with 1 string parameter converted to number.
// Using that parameter it will return if the current temperature is greater than 30 which will return false
// If the temperature is between 30 and -10 it will return true
// if it is less than -10 it will set isTooCold to true and return a message saying "Yikes! This is no weather for dog walking!"
function checkTemp(currentTemp) {
    var convertToNumber = parseInt(currentTemp);
    if(convertToNumber > 30) {
        return false
    } else if(convertToNumber < 30 && convertToNumber >= -10) {
        return true;
    } else if(convertToNumber < -10) {
        isTooCold = true;
        return "Yikes! This is no weather for dog walking!";
    }

}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

// Prompt a message to input a current temperature
var checkingTemp = prompt("What is the current temperature today?");

// Declare a variable to store the return result of checkTemp function with
// checkingTemp as the argument
var currentTemperature = checkTemp(checkingTemp);


if(currentTemperature && !isTooCold) { // Checking if currentTemperature is true and isTooCold is false
    alert("You're good, have a nice walk!");
} else if(!currentTemperature && !isTooCold) { // Checking if currentTemperature is false and isTooCOld is false
    alert("Yikes! Too hot for dog walking!");
} else if(isTooCold) { // checking if isTooCold is true
    alert(currentTemperature)
}