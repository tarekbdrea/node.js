// core moduels

const os = require("os");// require (נדרש ) 
// get the current user name
const userName = os.userInfo().username;// os thats the usage of the libraryn os

console.log(userName);

//3th party mudoles
 // command :  npm init -y      to start npm , and create package json file
 // command : npm install mathjs   to use library that can use math

 // app.js 
const math = require('mathjs');// require is like import work the same 

// An example of using some mathematical functions 
const a = 3;
const b = 4;

const sum = math.add(a, b); 
const product = math.multiply(a, b);
const power = math.pow(a, b);
const sqrt = math.sqrt(b);

console.log(`Sum of ${a} and ${b} is:`, sum);
console.log(`Product of ${a} and ${b} is:`, product);
console.log(`${a} raised to the power of ${b} is:`, power);
console.log(`Square root of ${b} is:`, sqrt);



//Our Local Modules
// using or dunctions like to make the life easy (like here we make sayhello func
//  so evry time i wan to print Hello, world! i well call the func sayHello)
//  myModule.js
function sayHello() {
    console.log('Hello, world!');
}

module.exports = sayHello;// module.exports to use our function in deffrent classes (like a library)
// delete the  app.js  and its code and past it in the file you create to work  


function myName(){
    console.log('tarek bdrea');

}
module.exports = myName; 
 