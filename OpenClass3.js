
var cardBalance = 50;
var price = 10;

function checkout(cardBalance, price){
    if(price > cardBalance) { return false; }
    else { return cardBalance - price; }
}

console.log(checkout(500, 100, 40));

// checkout();

// Question : 5
var a = 3;
var b = 5;

function sumOfTwo(a, b){
    return a + b;
}
// if only one parameter is passed this is a NaN
// examples: 
console.log(sumOfTwo(a));


// QUESTION : 6

var a = 5;

//write your code below

function speakFriend(par) 
{if (par === "Mellon") return "Enter";}
//else { return "Access Denied";}
    
console.log(speakFriend(a));

