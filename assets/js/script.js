// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCases = ["a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
  "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
  "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [ "0" , "1", "2", "3" , "4" , "5" , "6", "7", "8", "9"];
var specialChar = ["!", "*", "@", "#", "$", "&",
  "%", "/", "?", "+", "=", ",", ".", "<", ">"];


  
  // function for generating new password
  function generatePassword() {
    var myPrompt = parseInt(
      prompt("How long is your password? Must be between 8 and 128")
      // , 120
      );
      // password must be atleast 8 charaters and less than 128
      if (myPrompt < 8 || myPrompt > 128) {
        alert("does not meet criteria");
        return null;
      };
      // They need to be stored in a variable as well as the user password length
      var hasNumbers = confirm("Do you want to use numbers?")
      //Ask user if their are any lowercase letters 
      var hasLowerCase = confirm("Do you want to use lower case letters?")
      //Ask user if their are any uppercase letters
      var hasUpperCase = confirm("Do you want to use uppercase letters?")
      //Ask user if their are any special characters
      var hasSpecialChar = confirm("Do you want to use special characters?")
      
      if (!hasNumbers && !hasLowerCase && !hasUpperCase && !hasSpecialChar) {
        
        console.log("Can't generate password")
        
        return null
        
        
      }
      
      console.log(myPrompt);
      
      var result = []
      var chars = []
      
      if (hasLowerCase) {
        chars.push(getRandomElement (lowerCases))
        console.log(chars)
        result = result.concat(chars)
        console.log(result)
      }
      // Ask user for numbers
      
      if (hasNumbers) {
        chars.push(getRandomElement (numbers))
        console.log(chars)
        result = result.concat(chars)
        console.log(result)
      }
      
      if (hasUpperCase) {
        chars.push(getRandomElement (upperCases))
        console.log(chars)
        result = result.concat(chars)
        console.log(result)
      }
      
      if (hasSpecialChar) {
        chars.push(getRandomElement (specialChar))
        console.log(chars)
        result = result.concat(chars)
        console.log(result)
      }
      // Create an object to reference all the values in the obj
      
      return result.join("")
      // return the object
    };
    function getRandomElement(array) {
      var randomizer = Math.floor(Math.random() * array.length);
      var getRandElement = array[randomizer]
      return getRandElement
    }
    
    
    // My function to write a new password
    function writePassword() {
      var password = generatePassword();
      // var passwordText = document.querySelector("#password");
      var passwordText = document.querySelector("#password")
      passwordText.value = password;
      console.log("Enter Password")
      console.log("User Input", password)
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    
