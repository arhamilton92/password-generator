// Assignment Code
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");
var passwordText = document.querySelector("#password");

//String for each character type
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var integer = "1234567890".split("");

var special = "~!@#$%^&*()_+".split("");

//Array to hold selected character types
var masterArray = [];

//String for holding generated password
let newPass = "";

//String for password length input
let passwordLength = "";

//Password generator
function generatePassword() {
  //prompts the user to input password length
  var passwordLength = prompt(
    "How many characters in password? Minimum 8, Maximum 128."
  );
  //ends function if input is incorrect
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("please select a number between 8 and 128.");
    return;
  }
  
  //confirm selections
  var confirmLow = confirm("Include lowercase letters?");
  var confirmUpp = confirm("Include uppercase letters?");
  var confirmNum = confirm("Include numbers?");
  var confirmSpe = confirm("Include special characters?");
  
  //concatenate selections to master Array
  if (confirmLow) {
    masterArray = masterArray.concat(lowerCase);
  }
  if (confirmUpp) {
    masterArray = masterArray.concat(upperCase);
  }
  if (confirmNum) {
    masterArray = masterArray.concat(integer);
  }
  if (confirmSpe) {
    masterArray = masterArray.concat(special);
  }
  
  //ends function if no characters were selected
  if (!confirmLow && !confirmUpp && !confirmSpe && !confirmNum) {
    alert("You must select at least one character type.");
    return;
  }
  
  //generates password using the master Array and paswordlength input
  for (var i = 0; i < passwordLength; ++i) {
    newPass += masterArray[Math.floor(Math.random() * masterArray.length)];
  }
}

//Write password to the #password input
function writePassword() {
  //clears any info that may exist in our array/string due to previously generated passwords
  newPass = "";
  masterArray = [];
  
  //generates password
  generatePassword();
  
  //writes to text box
  passwordText.value = newPass;
}

//Removes generated password
function clearPassword() {
  passwordText.value = "";
}

// Add event listener to generate and clear buttons
generateBtn.addEventListener("click", writePassword);
clearBtn.addEventListener("click", clearPassword);