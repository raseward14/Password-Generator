// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerCaseLettersAre = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLettersAre = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericalCharsAre = "1234567890".split("");
var specialCharsAre = "!@#$%^&".split("");
var passwordLength;
var oneArray = [];
var results = [];

function writePassword() {

    results.splice(0, results.length);

    // Prompted to enter password length
    passwordLength = parseInt(window.prompt('How many characters do you want your password to be?'));
    // Invalid length, end function
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert('Valid passwords have greater than 8 and less than 128 characters.');
        return;
    }

    // Valid length, prompt lowercase
    var lower = confirm('Include lowercase letters?');
    if (lower) {
        oneArray = oneArray.concat(lowerCaseLettersAre);
        console.log('include lowercase letters');
    } else {
        console.log('dont include lowercase letters.');
    }

    // prompt uppercase
    var upper = confirm('Include uppercase letters?');
    if (upper) {
        oneArray = oneArray.concat(upperCaseLettersAre);
        console.log('include uppercase letters');
    } else {
        console.log('dont include uppercase letters.');
    }

    // prompt numbers
    var numbers = confirm('Include numbers?');
    if (numbers) {
        oneArray = oneArray.concat(numericalCharsAre);
        console.log('include numbers');
    } else {
        console.log('dont include numbers.');
    }

    // prompt special
    var special = confirm('Include special characters?');
    if (special) {
        oneArray = oneArray.concat(specialCharsAre);
        console.log('include special characters');
    } else {
        console.log('dont include special characters.');
    }
    console.log(oneArray);
    generatePassword();
}

// generatePassword function runs for passwordLength loop results are random from oneArray
function generatePassword() {
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * oneArray.length);
        results.push(oneArray[randomNumber]);
        console.log(randomNumber, results);
    }
    passwordText.textContent = results.join("");
    return results.join("");
}

// window.alert('generate a password'), and event listener click to write password
window.alert('generate a password');
generateBtn.addEventListener("click", writePassword);

