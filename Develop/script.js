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
  console.log(passwordLength);
  // Invalid length, end function
  if (passwordLength < 8 || length > 128) {
    alert('Valid passwords have greater than 8 and less than 128 characters.');
    return;
  }

  // Valid length, prompt lowercase
  var lower = window.confirm('Include lowercase letters?');
  if (lower) {
    var randomLower = lowerCaseLettersAre[Math.floor(Math.random()*lowerCaseLettersAre.length)];
    console.log('include lowercase letters ' + randomLower);
    // password.push(randomLower);
  } else {
    console.log('dont include lowercase letters.');
  }

  // prompt uppercase
  var upper = window.confirm('Include uppercase letters?');
  if (upper) {
    var randomUpper = upperCaseLettersAre[Math.floor(Math.random()*upperCaseLettersAre.length)];
    console.log('include uppercase letters ' + randomUpper);
    // password.push(randomUpper);
  } else {
    console.log('dont include uppercase letters.');
  }

  // prompt numbers
  var numbers = window.confirm('Include numbers?');
  if (numbers) {
    var randomNumber = numericalCharsAre[Math.floor(Math.random()*numericalCharsAre.length)];
    console.log('include numbers ' + randomNumber);
    // password.push(randomNumber);
  } else {
    console.log('dont include numbers.');
  }

  // prompt special
  var special = window.confirm('Include special characters?');
  if (special) {
    var randomSpecial = specialCharsAre[Math.floor(Math.random()*specialCharsAre.length)];
    console.log('include special characters ' + randomSpecial);
    // password.push(randomSpecial);
  } else {
    console.log('dont include special characters.');
  }

  // generate password
  var password = generatePassword(); {
    for (let index = 0; index < passwordLength; index++) {
      if (password > passwordLength) break;
      password.push(i);
      const element = array[index];
      
    }
  }
  var passwordText = document.querySelector("#password");

  window.alert('generate a password');
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




