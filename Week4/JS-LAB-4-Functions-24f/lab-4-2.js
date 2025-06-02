//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION

var frontEnd = 100;
var webDesign = 100;
var introDesign = 50;
var databaseDesign = 50;
var backEnd = 50;

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function foundAverage(num1, num2, num3, num4, num5) {
    var average = (num1 + num2 + num3 + num4 + num5) / 5;
    console.log(average.toFixed(1));
    return average.toFixed(1);
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
foundAverage(5, 10, 15, 20, 25.);

if(foundAverage(frontEnd, webDesign, introDesign, databaseDesign, backEnd) > 70) {
    alert("You are doing great!");
} else {
    alert("Review required");
}