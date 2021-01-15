// Assignment Code
var generateBtn = document.querySelector("#generate");
// set variables
var lowerCaseLettersAre = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLettersAre = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericalCharsAre = "1234567890".split("");
var specialCharsAre = "!@#$%^&".split("")
var passwordLength;

// Write password to the #password input
function writePassword() {
 
  console.log(passwordLength);
  var passwordText = document.querySelector("#password");
  var generatedPassword = generatePassword();
  passwordText.value = generatedPassword;

}

// generate password
function generatePassword() {
  // Prompted to enter password length
   passwordLength = parsInt(window.prompt('How many characters do you want your password to be?'));
  // Invalid length, end function
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('Valid passwords have greater than 8 and less than 128 characters.');
  return;
  }
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

    if (lower) {
      var randomLower = lowerCaseLettersAre[Math.floor(Math.random() * lowerCaseLettersAre.length)];
      // password = password + randomLower;
      console.log('include lowercase letters ' + randomLower);
    } else {
      console.log('dont include lowercase letters.');
    }

    if (upper) {
      var randomUpper = upperCaseLettersAre[Math.floor(Math.random() * upperCaseLettersAre.length)];
      // password = password + randomLower + randomUpper;
      console.log('include uppercase letters ' + randomUpper);
    } else {
      console.log('dont include uppercase letters.');
    }

    if (numbers) {
      var randomNumber = numericalCharsAre[Math.floor(Math.random() * numericalCharsAre.length)];
      // password = password + randomLower + randomUpper + randomNumber;
      console.log('include numbers ' + randomNumber);
    } else {
      console.log('dont include numbers.');
    }

    if (special) {
      var randomSpecial = specialCharsAre[Math.floor(Math.random() * specialCharsAre.length)];
      // password = password + randomLower + randomUpper + randomNumber + randomSpecial;
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




