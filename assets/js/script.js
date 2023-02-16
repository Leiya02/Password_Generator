// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCases = ["a", "b" , "c" , "d" , "e" , "f" , "g" , 
"h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , 
"r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
var upperCases = ["A", "B" , "C" , "D" , "E" , "F" , "G" , 
"H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , 
"R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"];
var number = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
var specialChar = [ "!" , "*" , "@" , "#" , "$" , "&" ,
"%" , "/" , "?" , "+" , "=" , "," , "." , "<" , ">"];


// My function to write a new password
function writePassword() {
  var password = generatePassword();
// var passwordText = document.querySelector("#password");
  var passwordText = document.querySelector("#password")
// passwordText.value = password;
console.log("Enter Password")
console.log("User Input" , password)
}

// function for generating new password
function generatePassword() {
  var myLength = parseInt(prompt("How long is your password? Must be between 8 and 128"));
};

// password must be atleast 8 charaters and less than 128
  if (myLength < 8 || myLength > 128) {
    alert("does not meet criteria");

// Ask user for numbers
  confirm ("Do you want to use numbers?")    
  //Ask user if their are any lowercase letters 
  confirm ("Do you want to use lower case letters?")
  //Ask user if their are any uppercase letters
  confirm ("Do you want to use uppercase letters?")
  //Ask user if their are any special characters
  confirm ("Do you want to use special characters?")  
  
  return null
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

