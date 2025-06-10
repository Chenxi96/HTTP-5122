//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
    name: "Chenxi",
    age: 28,
    city: "toronto",
    hobbies: ["gaming", "basketball", "movies"],
    greet: function() {
        alert("My name is " + meObject.name + ", I am " + meObject.age + ".")
    }
}

console.log(meObject.name)

alert("My name is " + meObject.name + ", I am " + meObject.age + " .")

meObject.greet();
