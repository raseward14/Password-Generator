// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCaseLettersAre = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', ];
const upperCaseLettersAre = ['A', 'B', 'C', 'D'];
const numericalCharsAre = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const specialCharsAre = [" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // when i click password, present series of prompts to generate password

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
