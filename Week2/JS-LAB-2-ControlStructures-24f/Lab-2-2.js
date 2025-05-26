//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
// alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input
	var userName = "dart";
	var password = "vader";



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
	var userNameInput = prompt("Please enter your username:");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
	console.log("user input: " + userNameInput)
//5. CREATE POPUP BOX FOR PASSWORD
	var passwordInput = prompt("Please enter your password:");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
	console.log("user password: " + passwordInput)
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
	if(userNameInput === userName && passwordInput === passwordInput)
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE

	{
		alert("Welcome back " + userName + " " + password);
		console.log("Login Success")
	}

//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE

	else {
		alert("Invalid username/password")
		console.log("Login Fail")
	}