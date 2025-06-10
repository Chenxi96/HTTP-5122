//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!

// Declared a bank Account object with properties and methods
var bankAccount = {
    lastName: "Lin",
    branchNumber: 3512545425,
    accountBalance: 500.25,
    interestRate: 1.03,
    
    // This method will deposit money into the account balance and return a string with the new balance rounded to two decimal places
    makeDeposit: function(param1) {
        bankAccount.accountBalance = bankAccount.accountBalance + param1;
        return "Thank you, your balance is now $" + bankAccount.accountBalance.toFixed(2);
    },

    // This method will withdraw money from the account balance and return a string with the new balance rounded to two decimal places
    makeWithdrawal: function(param2) {
        bankAccount.accountBalance = bankAccount.accountBalance - param2;
        return "Thank you, your current balance is now $" + bankAccount.accountBalance.toFixed(2);x
    },

    // This method will add interest to the account balance and 
    // inside the method it checks boolean if multipleAccounts is true or false then it will
    // decide to add .005 or not if true accountBalance * interestRate + 0.005
    // if false accountBalance * interestRate and both conditional will
    // return a string with the new balance rounded to two decimal places
    addInterest: function() {
        if (bankAccount.multipleAccounts === true) {
            bankAccount.accountBalance = bankAccount.accountBalance * (bankAccount.interestRate + .005) ;
            return "Thank you, your current balance is now $" + bankAccount.accountBalance.toFixed(2);
        } else {
            bankAccount.accountBalance = bankAccount.accountBalance * bankAccount.interestRate;
            return "Thank you, your current balance is now $" + bankAccount.accountBalance.toFixed(2);
        }
    },
    multipleAccounts: true,
}

bankAccount.makeDeposit(200);
bankAccount.addInterest();

console.log(bankAccount.accountBalance);

bankAccount.makeWithdrawal(75);
bankAccount.addInterest();

console.log(bankAccount.accountBalance);

