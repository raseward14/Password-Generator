// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCaseLettersAre = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLettersAre = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numericalCharsAre = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialCharsAre = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"];

// Write password to the #password input
function writePassword() {
  // Prompted to enter password length
  var passwordLength = window.prompt('How many characters do you want your password to be?');
  
  // Invalid length, end function
  if (passwordLength < 8 || length > 128) {
    alert('Valid passwords have greater than 8 and less than 128 characters.');
    return;
  }

  // Valid length, prompt lowercase
  var lower = window.confirm('Include lowercase letters?');

  if (lower) {
    parseInt.lowerCaseLettersAre;
  }

  // prompt uppercase
  var upper = window.confirm('Include uppercase letters?');
  if (upper) {
    .upperCaseLettersAre;
  }

  // prompt numbers
  var numbers = window.confirm('Include numbers?');
  if (numbers) {
    .numericalCharsAre
  }
  // prompt special
  var special = window.confirm('Include special characters?');
  if (special) {
    .specialCharsAre
  }
};

  // generate password
  var password = generatePassword(Math.floor(Math.random() * passwordLength))
  var passwordText = document.querySelector("#password");

  window.alert('generate a password');
  passwordText.value = password;
  return;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




