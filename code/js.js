// Assignment code here
function generatePassword(){
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChars = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var lowerCaseLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
  var upperCaseLetters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];  
  var numberConfirm = confirm("Do you want numbers?");
  var specialCharsConfirm = confirm("Do you want special Characters?");
  var lowerCaseLettersConfirm = confirm("Do you want lower case letters?");
  var upperCaseLettersConfirm = confirm("Do you want upper case letters?");
  var length = prompt("choose between 8-128 characters");
  var passlength= parseInt(length);
  if (isNaN(passlength) || passlength < 8 || passlength > 128) {
    alert("You need to input a number between 8 and 128.");
    return null;
  }
  var char = [];
  if (numberConfirm){
   char = char.concat(numbers);
  }
  if (specialCharsConfirm){
    char = char.concat(specialChars);
   }
   if (lowerCaseLettersConfirm){
    char = char.concat(lowerCaseLetters);
   }
   if (upperCaseLettersConfirm){
    char = char.concat(upperCaseLetters);
  }
  var randi = randomize(char, passlength);
  return randi;
};
function randomize(char, passlength) {
  var str = "";
  for (var i = 0; i < passlength; i++) {
    var rand = Math.floor(Math.random() * char.length);
    var randchar = char[rand];
    str += randchar;
  }
  return str;
}

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
