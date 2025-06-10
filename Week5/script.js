// Declaring my object
var myDog = {
    name: "Echo",
    age: 7,
    fixed: true,
    shots: [11025222, 110521],
    bark: function () {
        alert("bark!");
    },
    birthday: function () {
        myDog.age = myDog.age + 1;
    }
};

var dogName = myDog.name;
myDog.name = "Echo again";
myDog.breed = "border collie";
myDog.birthday();

console.log(myDog)
// myDog.bark();

// if(true) {

// }