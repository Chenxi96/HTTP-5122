// Math Object

var object = {
    x :1,
    y : function() {

    }
}

var pi = Math.PI;

var x = 2.47;

// Round to the nearest integer
var round = Math.round(x);
var roundUp = Math.ceil(x);
var roundDown = Math.floor(x);

//  Math.random = 0 to 0.9999999
var random = Math.random();


var closeRandom = Math.floor(Math.random() * 10) + 1;

// console.log(closeRandom);

// Date Object

// Create a new instance of the Date object
var myDate = new Date();
var newYear = new Date("January 1, 2026 00:00:00");

var newYearMonth = newYear.getMonth();
var weekAfterNewYear = newYear.setDate( newYear.getDate() + 7)


console.log(weekAfterNewYear)

// Javascript Timers

// Countdown Timer
var countDown = window.setTimeout(timerFunction, 3000 );

function timerFunction() {
    // alert("Countdown has finished")
    console.log("Countdown has finished")
}

// Looping Timer
var  looper = window.setInterval(loopFunction, 3000);



var i = 0;
function loopFunction() {
    console.log(`value of i + ${i}`)
    i++

    //  Stop the interval
    if(i>3) {
        window.clearInterval(looper)
        console.log("looper is cleared")
    }
    window.clearTimeout(countDown)
}


