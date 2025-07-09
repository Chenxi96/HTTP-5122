window.onload = windowLoaded;

function windowLoaded() {
    var form =  document.forms[0];

    form.onsubmit = submitted;

    function submitted() {
        // These variables are used in function changeView()
        var isNoError = false; // This is use to ensure that the input fields has been filled
        var isItChecked = false; // This is used to check if input field radio type is filled

        var header = document.getElementById("welcome"); // Declare variable to get the header section
        var formSection = document.getElementById("form"); // Declare variable to get the form section section
        var resultSection = document.getElementById("result"); // Declare variable to get the result section

        // Declared variables to store form input values
        var firstName = document.getElementById("in_fName"); // Store first name input
        var lastName = document.getElementById("in_lName"); // Store last name input
        var humberId = document.getElementById("in_id"); // Store humber id input
        var programName = document.getElementById("in_program"); // Store humber program input

        // Declare variable to store as a list
        var projectName = document.getElementsByName("f__project"); // Store the list of input name of "f__project"
        var inputNames = document.getElementsByTagName("input"); // Store a list of input fields

        var captionProject = document.getElementById("caption_project")

        // Declared variables to store the results
        var resultFirstName = document.getElementById("result__Fname"); 
        var resultLastName = document.getElementById("result__Lname");
        var resultId = document.getElementById("result__id");
        var resultProgram = document.getElementById("result__program");
        var resultProject = document.getElementById("result__project");

        // Part 1. SHOW AND HIDE
        function changeView() {
            // This is checking if there's no empty input fields and if the radio input field has been checked
            if(isNoError && isItChecked) {
                header.style.display = "none"; // header disappears after form submit
                formSection.style.display = "none"; // form disappears after form submit
                resultSection.style.display = "block"; // result section will appear after for submit
            }

            return false; // Will always return false to prevent browser refresh
        }
        
        // Part 2. OUTPUT
        resultFirstName.innerHTML = firstName.value; // Added text of first name from first name input value
        resultLastName.innerHTML = lastName.value; // Added text of last name from last name input value
        resultId.innerHTML = humberId.value // Added text of humber id from humber id input value
        resultProgram.innerHTML = programName.options[programName.selectedIndex].innerText // Added text of humber program name from selected program name options
        
        
        // selected the checked value on the radio tag
        for(let i=0; i<projectName.length; i++) {
            if(projectName[i].checked) {
                resultProject.innerHTML = projectName[i].value; // Insert the selected input type radio into the span tag with id "result__project"
            }
        }

        // Part 3. VALIDATION

        // Stretch Goal: CHECK IT WITH REGEX
        var studentNumber = /^n\d\d\d\d\d\d\d\d$/i; // Regex value first char should be 'n' non case sensitive and with 8 digits from 0-9

        // if input field for select tag text value is "CHOOSE ONE" then it will change background color to red
        if(resultProgram.innerHTML === "CHOOSE ONE") {
            programName.style.backgroundColor = "red";
            isNoError = false; 
        } else {
            programName.style.backgroundColor = "initial"
            isNoError = true;
        }

        // Loop through the list of inputs, inside the loop have conditionals to validate each inputs
        for(var i=0; i<inputNames.length - 1; i++) {

            // if input value is an empty string and the input field has an id of "in_fName" change border to red and receive focus
            if(inputNames[i].value === "" && inputNames[i].id === "in_fName") {
                inputNames[i].style.border = "1px solid red";
                inputNames[i].style.backgroundColor = "red";
                inputNames[i].focus();
                isNoError = false; // Change isNoError variable to false

            // if input value is an empty string and the input field has an id of "in_lName" change border to red and receive focus
            } else if(inputNames[i].value === "" && inputNames[i].id === "in_lName") {
                inputNames[i].style.border = "1px solid red";
                inputNames[i].style.backgroundColor = "red";
                inputNames[i].focus();
                isNoError = false; // Change isNoError variable to false

            // if input field has an id of "in_id"
            } else if(inputNames[i].id === "in_id") {
                // also if the input field value matches the REGEX value then change border to red and receive focus
                if(!studentNumber.test(inputNames[i].value)) {
                    inputNames[i].style.border = "1px solid red";
                    inputNames[i].style.backgroundColor = "red";
                    inputNames[i].focus();
                    isNoError = false; // Change isNoError variable to false
                } else {
                    inputNames[i].style.border = "initial" // Change border style back to default input field is correct
                }
            //  if non of the input field is not checked and it's a radio type then change all the radio type input field background color to red
            } else if (!inputNames[i].checked && inputNames[i].type == 'radio') {
                captionProject.style.backgroundColor = "red";
                isItChecked = false; // Change isNoError variable to false
            // if one of the input field is checked and it's a radio type then change all the radio input field background color back to default
            } else if (inputNames[i].checked === true && inputNames[i].type == 'radio') {
                captionProject.style.backgroundColor = "initial";
                isItChecked = true // Change isNoError variable to true
                break;
            // Change input field border back to default
            } else {
                inputNames[i].style.border = "initial";
                inputNames[i].style.backgroundColor = "initial";
            }
        }

        return changeView(isNoError); // return changeView function
    }
}