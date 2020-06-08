// Assignment Code
var generateBtn = document.querySelector("#generate");


//Array for each character type
var lowerCase = ("abcdefghijklmnopqrstuvwxyz").split("");

var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");

var integer = ("1234567890").split("");

var special = ("~!@#$%^&*()_+").split("");


//Array to hold selected character types
var masterArray = []

//string for generated password
let newPass = ""

//string for password length input
let passwordLength = ""

//the generator function! 
function generatePassword() {
  //prompts the user to input password length
  var passwordLength = prompt("How many characters in password? Minimum 8, Maximum 128.")
  //ends function if input is incorrect
    if (isNaN(passwordLength) || passwordLength <8 || passwordLength > 128 ) {
      alert("please select a number between 8 and 128.");
      return;
    }
  

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
