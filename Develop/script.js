// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLettersAre = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLettersAre = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericalCharsAre = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharsAre = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"];
var passwordLength;

// Write password to the #password input
function writePassword() {
  // Prompted to enter password length
  passwordLength = window.prompt('How many characters do you want your password to be?');
  console.log(passwordLength);
  var passwordText = document.querySelector("#password");
  var generatedPassword = generatePassword();
  passwordText.value = generatedPassword;

  // Invalid length, end function
  if (passwordLength < 8 || length > 128) {
    alert('Valid passwords have greater than 8 and less than 128 characters.');
  }

 
}

// generate password
function generatePassword() {
  var password = "";
  // Valid length, prompt lowercase
  var lower = window.confirm('Include lowercase letters?');
  // prompt uppercase
  var upper = window.confirm('Include uppercase letters?');
  // prompt numbers
  var numbers = window.confirm('Include numbers?');
  // prompt special
  var special = window.confirm('Include special characters?');
  for (i = 0; i < passwordLength; i++) {
    if (password.length === passwordLength) break;


    if (lower === confirm) {
      var randomLower = lowerCaseLettersAre[Math.floor(Math.random() * lowerCaseLettersAre.length)];
      password = password + randomLower;
      console.log('include lowercase letters ' + randomLower);
    } else {
      console.log('dont include lowercase letters.');
    }

    if (upper === confirm) {
      var randomUpper = upperCaseLettersAre[Math.floor(Math.random() * upperCaseLettersAre.length)];
      password = password + randomLower + randomUpper;
      console.log('include uppercase letters ' + randomUpper);
    } else {
      console.log('dont include uppercase letters.');
    }

    if (numbers === confirm) {
      var randomNumber = numericalCharsAre[Math.floor(Math.random() * numericalCharsAre.length)];
      password = password + randomLower + randomUpper + randomNumber;
      console.log('include numbers ' + randomNumber);
    } else {
      console.log('dont include numbers.');
    }

    if (special === confirm) {
      var randomSpecial = specialCharsAre[Math.floor(Math.random() * specialCharsAre.length)];
      password = password + randomLower + randomUpper + randomNumber + randomSpecial;
      console.log('include special characters ' + randomSpecial);
    } else {
      console.log('dont include special characters.');
    }
    return password;
  }
}

window.alert('generate a password');




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




