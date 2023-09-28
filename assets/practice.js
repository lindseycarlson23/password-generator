// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// array for each character type
var numArray = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialChar = [" ", "!", """, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "{", "|", "}", "~"]

function generatePassword(){
  var numChar = window.prompt("How many characters would you like your password to contain?");

  generatePassword();
console.log(numChar)

    // All your code here

    // First Prompt Pop-up "How many characters would you like your password to contain?"


  // console.log(numChar);

    // Second Confirm Pop-up "Click OK to confirm including special characters."


  // var inclNums = window.confirm true/false LOOK UP CONFIRMS
  
  

  
  // if statement
  // var options =[];
    // if true push/concat that array into a new array var
    // (if this is true, throw it into the array === everything the user said Yes to)
  
  // for loop through options array based on required characters (do this to iterate through the options array, the number of numChar)
    // Random index value for every loop
    // Google this; How to randomly choose a value from an array
    // var chosenArr = [];
    // turn array into string called password
  
    return password;
  }