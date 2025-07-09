/* LAB 8.2 - STOP TIME */

//create page load listener
window.onload = pageLoaded;


//create page load function
function pageLoaded() {

	var startBtn = document.getElementById("btnStart");
	var stopBtn = document.getElementById("btnStop")
	var secondP = document.getElementById("secsOut");
	var minuteP = document.getElementById("minsOut");
	var hourP = document.getElementById("hoursOut");

	//create variables for required HTML elements
	var hours = 0;
	var minutes = 0;
	var seconds = 0;

	var start; //create time variable so all functions have access to it

	var isOn = false // Used to check clock
	
	//CREATE FUNCTION TO START THE CLOCK.
	function startClock() {
		// Checks if the clock started or not
		if(isOn) {
			return; // if true it will exit the function
		}

		start = setInterval(displayTime, 1000); // set the start variable to an interval
		isOn = true; // Set true
	}

	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock() {
		clearInterval(start) // stops the interval
		isOn = false; // change isOn to false

	}

	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displayTime() {
		seconds++

		// if seconds equal 60
		if(seconds === 60) {
			minutes++ // increment 1 to minutes
			seconds = 0; // reset seconds to 0
		}
		
		if(minutes === 60) {
			hours++ // increment 1 to hours
			minutes = 0; // reset minutes to 0
		}

		// Stretch Goal
		// if seconds is less than 10
		if(seconds < 10) {
			secondP.innerHTML = ":0" + seconds; // concatenate string ":0" with seconds value into span tag
		} else {
			secondP.innerHTML = ":" + seconds // default concatenate string ":" with seconds value into span tag
		}

		// if minutes is less than 10
		if(minutes < 10) {
			minuteP.innerHTML = ":0" + minutes; // Concatenate string ":0" with minutes value into span tag
		} else {
			minuteP.innerHTML = ":" + minutes; // Default concatenate string ":" with minutes value into span tag
		}

		// if hours is less than 10
		if(hours < 10) {
			hourP.innerHTML = "0" + hours; // Concatenate string "0" with hours value into span tag
		} else {
			hourP.innerHTML = hours; // display hours
		}
	}
	
	// SET EVENT LISTENERS
	startBtn.onclick = startClock;
	stopBtn.onclick = stopClock;
	
}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
