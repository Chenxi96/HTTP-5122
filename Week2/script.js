console.log("code is initialized");

var x = 5;

x = x + 2;
x += 2;

var hello = "Hello";
var world = "world";

hello += world;

// alert(hello);
console.log("Code finished running");

// if  it is raining, then the ground is wet
var isRaining = true;

//if true, then ....
if(isRaining) 
{
    //do this
    // alert("The ground is wet");
} 
else if (isRaining == false)
{
    // alert("THe ground is NOT wet");
}
else 
{
    // alert("Its snowing");
}

// if(!isRaining)
// {
//     alert("The ground is not wet")
// }

var price = 10;

if(price >= 10)
{
    // alert("The price is over 5")
}

var fruit = "apple";

// prompt the user for an input
// var userFruit = prompt("Please enter a fruit", "Grapes");

// VALIDATION
//check on that input
// switch(userFruit)
// {
//     case "apple" :
//         alert("This is an apple");
//         break;
//     case "banana" :
//         alert("This is a banana");
//         break;
//     case 5 :
//         alert("this is the number 5");
//         break;
//     default :
//         alert("this is my default case");
//         break;
// }

// if(isNaN(userFruit))
// {
//     alert("Not a number");
// }

var isConfirmed = confirm("Is this true?");
alert(isConfirmed);