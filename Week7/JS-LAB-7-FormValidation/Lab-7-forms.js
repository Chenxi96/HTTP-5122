/* LAB 7 - SHIPPING FORM */
// // // //Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
		name: "",
		pc: "",
		speed: "",
		cost: 0
	};

//==== CREATE YOUR PSEUDOCODE COMMENTS FIRST
//WAIT FOR THE PAGE TO LOAD
window.onload = onReady;

// Declared a function that when windows is loaded fully it will trigger this function
function onReady() {
	var shippingForm = document.forms.shippingForm // Selected shipping form
	
	shippingForm.onsubmit = processForm; // Select the event when form has been submitted
	
	function processForm() {
			
			// Span elements for displaying the return values
			var customerName = document.getElementById("thanksCustomer");
			var customerPostCode = document.getElementById("thanksPC");
			
			// Selected Form Input ID
			var postCodeError = document.getElementById("in_pc");
			var nameInputError = document.getElementById("in_Name");
			var deliveryInput = document.getElementById("in_Speed");
			
			// Selected Span Element
			var deliveryType = document.getElementById("thanksSpeed");
			var deliveryCost = document.getElementById("thanksCost");

			var nameInput = shippingForm.in_Name.value; // Value of name Input
			var postalCodeInput = shippingForm.in_pc.value; // Value of postal code

			// Added these value to each key of shipInfo
			shipInfo.name = nameInput
			shipInfo.pc = postalCodeInput
			shipInfo.speed = deliveryInput.options[deliveryInput.selectedIndex].text
			shipInfo.cost = deliveryInput.value
			
			// Added validation if default was selected
			if(shipInfo.speed == "===SELECT===") {
				alert("Please select delivery speed")
				return false;
			}
			
			// Conditional to check if one or more inputs are empty
			// if any of them are true it will change background color of input to red and direct the cursor to the input.
			if(nameInput == "" && postalCodeInput === "") {
				nameInputError.style.backgroundColor = "red";
				nameInputError.focus()
				postCodeError.style.backgroundColor = "red";
				postCodeError.focus()
			} else if(nameInput === "") {
				nameInputError.style.backgroundColor = "red";
				nameInputError.focus()
				
			} else if(postalCodeInput === "") {
				postCodeError.style.backgroundColor = "red";
				postCodeError.focus()
			} else {
				var thankYouContainer = document.getElementById("thanks_msg"); // Select the Thank you Div
				shippingForm.style.display = "none" // When form has been submitted hide the shipping form
				thankYouContainer.style.display = "block" // Have the Thank you div to display
				deliveryType.innerHTML = shipInfo.speed; // selects the span ID thanksSpeed element then change text to the shipInfo object value of key speed
				deliveryCost.innerHTML = shipInfo.cost; // select the span ID thanksCost and change the text to the shipInfo object value of key cost
				customerName.innerHTML = shipInfo.name; // select the customerName ID and change the text to shipInfo object value of key name
				customerPostCode.innerHTML = shipInfo.pc; // select the customer thanksPC ID element and change the text to the shipInfo object value of key pc
			}
			console.log(shipInfo)
			return false; // Prevent reset of the page
		}
	
}
