/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = loadedPage;

function loadedPage() {

	var todayDate = document.getElementById("todayData");
	var finalDate = document.getElementById("finalData");
	var dueData = document.getElementById("dueData");
	var countMessage = document.getElementById("countMsg");
	// 1. Created variables for now and due date
	var now = new Date();
	var dueDate = new Date("2025-08-15");
	// 2. Output todays date string due date string
	todayDate.innerHTML = now;
	finalDate.innerHTML = dueDate;

	// 3. Declare variables to convert and find the difference
	var convertCurrentDate = now.getTime();
	var convertCurrentDueDate = dueDate.getTime();
	var dateDifference = convertCurrentDueDate - convertCurrentDate;

	// 4. Convert to days
	var calculateAsDays = Math.ceil(dateDifference / (1000 * 60 * 60 * 24));

	// 5. Send data to the html element
	dueData.innerHTML = calculateAsDays;
	
	// 6. deadline has passed changed last paragraph
	if(dateDifference <= 0) {
		countMessage.innerHTML = "The Deadline for the Final Assignment has passed!"
	}

}