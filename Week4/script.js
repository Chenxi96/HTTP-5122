var isRaining = true;
var isGroundWet = false;

// && - 'and' statement, both values have to be
// true for the whole statement to be true

// || - 'or' statement, only one value has to be
// true for the whole statement to be true
if(isRaining && isGroundWet) {
    // alert("It's raining");
}

/************************************ FUNCTION ********************************/

var x = 5;
var y = 9;

function calculatorAdd(num1, num2) {
    var z = num1 + num2;
    alert(z);
    return z; // finish function, anything after this will not run
}

calculatorAdd(1, 2);

// convert a number to a dollar amount
function dollarAmount(value1, value2) {
    var amount = calculatorAdd(value1, value2);
    var dollarString = "$" + amount.toFixed(2);
    return dollarString
}

var convertedDollar = dollarAmount(5, 9);

alert(convertedDollar)

/************************************ SCOPE ********************************/

