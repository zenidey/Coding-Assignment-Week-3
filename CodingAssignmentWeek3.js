// // QUESTION 1
// /* A. subtract the value of the first element in the array from 
// the value in the last element of the array */
// const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// /* B. Add a new age to your array and repeat the step above */
// ages.push(50)

// let first = ages[0];
// let last = ages[ages.length -1];
// let subtractionOfAges = last - first;

// console.log(subtractionOfAges);


// /* C. Use a loop to iterate through the array 
// and calculate the average age. Print the result to the console. */

// const aLen = ages.length;
// var sum = 0;                  // Create the new variable outside the for loop

// for (i = 0; i < aLen; i++){
//     // console.log("The variable i is ; " + i); // the index, start point
//     // console.log("ages[i]; " + ages[i]);   // printing every index in the array
//     sum = sum + ages[i];      // sum = 0 + 3 NEW VALUE: 3, sum = 3 + 9 NEW VALUE: 12
//     // console.log("sum is " + sum);   
//     // console.log("");
// }

// console.log(sum / ages.length);     // average of the numbers in the loop

// // QUESTION 2
// /* A. Use a loop to iterate through the array and 
// calculate the average number of letters per name */

// const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// let total = 0;

// for (let i = 0; i < names.length; i++) {   // names[i].length : hey return the length starting from this point
//  total = total + names[i].length;         // names[i] is referring to the first index because i = 0
// }                                        // .length is calling for a property of the array in this case number of letters per name */

// console.log(total/names.length);

// console.log("");

// /* B. Use a loop to iterate through the array again and 
// concatenate all the names together, separated by spaces, and 
// print the result to the console. */

// let namesTogether = "";

// for (let i = 0; i < names.length; i++){
//     namesTogether += names[i] + " ";
// }
// console.log(namesTogether);


// // QUESTION 3 - Accessing first array element
//  let arrayName = arrayName[0];

// // QUESTION 4 - Accessing last array element
//  let arrayName = arrayName[arrayName.length - 1];


// // QUESTION 5
// /* Create a new array called nameLengths. 
// Write a loop to iterate over the previously created names array and 
// add the length of each name to the nameLengths array. */

// let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// // let nameLengths = names.map(function(element){      // map () creates a new array from calling a function for every array element
// //    for (i = 0; i < names.length; i++);       // is a loop needed since a map goes through each element?
// //     return element.length;               
// // })
// // console.log(nameLengths);

// let nameLengths = [];
// for (i = 0; i < names.length; i++){
//     nameLengths[i] = names[i].length
// }
// console.log(nameLengths);


// // Map Method takes a function and preforms an iteration on each element within the array you called the map method on 
// // New array comes with the results of the return values from the function

// // QUESTION 6
// /* Write a loop to iterate over the nameLengths array and 
// calculate the sum of all the elements in the array. Print the result to the console.*/

// // let sum = nameLengths.reduce(function(total, currentValue){
// //     return total + currentValue;
// // })
// // console.log(sum);

// let sum = 0;

// for (i = 0; i < nameLengths.length; i++){
//     sum = sum + nameLengths[i];
//     console.log(sum);
// }


// // QUESTION 7
// /* Write a function that takes two parameters, word and n, as arguments and 
// returns the word concatenated to itself n number 
// times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function 
// to return ‘HelloHelloHello’). */

// function greeting(word, n){
//     let excessiveGreeting = ""
//     for (i = 0; i < n; i++){
//         excessiveGreeting = excessiveGreeting + word;
//     }
//     return excessiveGreeting;
// }
// console.log(greeting("Hello", 3));


// // QUESTION 8
// /* Write a function that takes two parameters, firstName and lastName, and 
// returns a full name (the full name should be the first and the last name separated by a space)*/

// function createFullName(firstName, lastName){
//     return firstName + " " + lastName
// }

// // QUESTION 9
// /* Write a function that takes an array of numbers and 
// returns true if the sum of all the numbers in the array is greater than 100 */

// const array = [4,63,67];
// var sum = 0;    

// function myFunction(arrayOfNumbers){ 
//     for (i = 0; i < arrayOfNumbers.length; i++){
//         sum = sum + arrayOfNumbers[i];}
//     if (sum > 100){
//         return true
//     }
    
// }

// console.log(myFunction(array));

// // QUESTION 10
// /* Write a function that takes an array of numbers and 
// returns the average of all the elements in the array.*/

// const array = [4,63,67];
// var sum = 0;   

// function myFunction(arrayOfNumbers){
//     for (i = 0; i < arrayOfNumbers.length; i++){
//         sum = sum + arrayOfNumbers[i];
//     } return sum / arrayOfNumbers.length
// }

// console.log(myFunction(array));

// // QUESTION 11
// /* Write a function that takes two arrays of numbers and 
// returns true if the average of the elements in the first array 
// is greater than the average of the elements in the second array.*/

// sum1 = 0;
// sum2 = 0;

// const test1 = [4,63,67];
// const test2 = [4,6,1];

// function myFunction(array1, array2){
//     for (i = 0; i < array1.length; i++){
//         sum1 = sum1 + array1[i];
//     } 
//     for (i = 0; i < array2.length; i++){
//         sum2 = sum2 + array2[i];
//     } if (sum1 > sum2){
//         return true
//     }
    
// }
// console.log(myFunction(test1,test2));

// // QUESTION 11
// /* Write a function called willBuyDrink that takes a boolean isHotOutside, 
// and a number moneyInPocket, and returns true if it is hot outside and 
// if moneyInPocket is greater than 10.50. */

// let hot = true;
// let money = 25;

// function willBuyDrink(isHotOutside, moneyInPocket){
//     if(Boolean(isHotOutside) && moneyInPocket > 10.50){
//         return true
//     }
// }
// console.log(willBuyDrink(hot,money));

// let player1 = "rock";
// let player2 = "rock";



function winnerOfMatch(player1, player2){
    if(player1 === player2){
        console.log("We have ourselves a tie!");
    } else if ((player1 === "rock") && (player2 === "scissors")){
        console.log("Rock wins!");
    } else if((player1 === "rock") && (player2 === "paper")){
        console.log("Paper wins!");
    } else if ((player1 === "paper") && (player2 === "scissors")){
        console.log("Scissors wins!");
    } else if ((player1 === "paper") && (player2 === "rock")){
        console.log("Paper wins!");
    } else if ((player1 === "scissors") && (player2 === "rock")){
        console.log("Rock wins!");
    } else {
        console.log("Scissors wins!");
    }
}

winnerOfMatch("scissors", "paper");

/* The function above gives us the result of a rock, paper, scissors match.
I created it to receive the players draw (rock, paper, scissors) and print the winner.*/






















// function winnerOfMatch(player1, player2){
//     if(player1 === player2){
//         console.log("We have ourselves a tie!");} 

//     if ((player1 === "rock") && (player2 === "scissors")){
//         console.log("Rock wins!");
//     } else if((player1 === "rock") && (player2 === "paper")){
//         console.log("Paper wins!");
//     } else if ((player1 === "paper") && (player2 === "scissors")){
//         console.log("Scissors wins!");
//     } else if ((player1 === "paper") && (player2 === "rock")){
//         console.log("Paper wins!");
//     } else if ((player1 === "scissors") && (player2 === "rock")){
//         console.log("Rock wins!");
//     } else if ((player1 === "scissors") && (player2 === "paper")){
//         console.log("Scissors wins!");
//     }
// }