//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var isConfirmed = confirm("Would you like to join our email list?");
var defaultEmail = "me@example.com";
var email;

//==== LOGIC =============
// If they agree to join the email list, ask for their email
if (isConfirmed) {
    // asking for email
    email = prompt("Please enter your email:", defaultEmail)
    // If there email is either empty, null, or default email, then ...
    if(email == "" || email == null || email == defaultEmail) {
        // alert the user that their email is invalid
        alert("Thank you, but your email was not valid.")

    } else {
        // alert them that their newsletter will be sent to them to their email
        alert("Thank you, our next newsletter will be sent to " + email)
    }
} else {
    // if they do not accept the email list, alert them that they will not be bothered
    alert("Thank you, we will not bother you again.")
}

