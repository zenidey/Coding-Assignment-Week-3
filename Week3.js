// ARRAYS
var customerNames = [];
customerNames.push("Sam Smith");
customerNames.push("Tommy Guns");

console.log(customerNames[0]);

for (let i = 0; i < customerNames.length; i++){  
    console.log(customerNames[i]);
}                               

for (name of customerNames){
    console.log(customerNames);
} // Trouble printing why?


// FUNCTIONS 

function myFunction() {
    for (let i = 0; i < 100; i++){
        console.log(i);
    }
}

myFunction(); // function has to be invoked, name should be verbs because functions are actions

// examples on how functions can be reused
/* write code so the function is only doing one thing
max of 3 parameters */

function createFullName(firstName, lastName){   // firstName, lastName are examples of parameters
    console.log(firstName + " " + lastName);    // parking spot : parameters are in the declaration
}

createFullName("Zenidey","Saavedra"); // Zenidey Saavedra example of arguments (car) used in invocation


function createFullName(firstName, lastName){ 
    return firstName + " " + lastName;    // return: ex. vending machine returning candy and change
}

var fullName = createFullName("Zenidey", "Saavedra");
console.log("Welcome, " + fullName);

// ARRAY METHODS

let names = ["Sam", "Tom", "Eric", "Sally", "Nicholas"];
let lengths = names.map(function(element) {
        return element.length;
});
console.log(lengths);


let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 10);             // initial value it starts at
console.log(sum);


names.forEach(function(element) {
    console.log(element);
});


let evens = names.filter(function(element) {
    return element.length % 2 == 0;
});
console.log(evens);

let removedElement = names.splice(1, 1);
console.log(removedElement);

// OBJECTS : structure that logically groups data and functionality

// Object literals make up an objects property and functionality

var dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: "black",
    dvdName: "Mulan",
    printDVDName: function(){
        console.log(this.dvdName);
    }
};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();

// EQUALITY VS IDENTITY OPERATORS

// the equality operator does not care about the date type
// When to use == ?

console.log(2 == "2");
console.log(2 === "2");



// OPEN CLASS : Functions

