//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = loadTheFunction;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function loadTheFunction() {
	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");
	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function popUpBox() {
		var isConfirm = confirm("Do you want to see something?")
		if(isConfirm) {
			mysteryBox.style.display = "none";
			buttonBox.style.display = "block";
		}
	}

	function clickedButton() {
		buttonBox.style.width = "600px";
		buttonBox.style.backgroundColor = "orange";
		buttonBox.innerHTML = "<h2>SURPRISE!!</h2>";
	}

	
	//FUNCTION TO CHANGE buttonBox
	buttonBox.onclick = clickedButton;
	//SETUP LISTENERS
	mysteryBox.onmouseover = popUpBox;
}
//END onload FUNCTION