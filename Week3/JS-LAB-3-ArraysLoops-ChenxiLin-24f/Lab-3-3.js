//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
// Declare an array to hold user submitted prices
var shoppingCart = [];

// Declare a variable
var addToCart;

// DECLARE A INT VARIABLE WITH VALUE 0. THIS IS THE TOTAL AMOUNT
var runningTotal = 0;
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while(runningTotal <= 35) {
	// INITIALIZE PROMPT FOR DOLLAR AMOUNT VALUE FOR EACH NEW ITEM
	addToCart = prompt("Add to cart: " , "10");
	//CONVERT USER INPUT TO A NUMBER AND SUM IT IN runningTotal VARIABLE
	runningTotal += parseInt(addToCart);
	// ADD addToCart with " |"  AND APPEND IT TO shoppingCart VARIABLE
	shoppingCart.push(addToCart + " |");
}

// IF MINIMUM AMOUNT IS 35 OR MORE THERE WILL BE A POPUP THAT SHOWS "Your shipping for this order will be free!"
if(runningTotal >= 35) {
	alert("Your shipping for this order will be free!")
}
	
	
// USING THE JOIN METHOD TO JOIN THE ARRAY ELEMENTS INTO A STRING TYPE THEN CONSOLE IT AS A STRING
// "Item prices: “ along with the list of items separated by | (the ‘pipe’)"
console.log("Item prices: " + shoppingCart.join(' '));



// STRETCH GOAL: HAVE A POP UP TO SHOW THE TOTAL VALUE AMOUNT OF THE PURCHASES
alert("total amount: " + "$" + runningTotal);
