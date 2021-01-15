// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLettersAre = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLettersAre = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericalCharsAre = "1234567890".split("");
var specialCharsAre = "!@#$%^&".split("");

function writePassword() {

    var oneArray = [];

    // Prompted to enter password length
    var passwordLength = parseInt(window.prompt('How many characters do you want your password to be?'));
    // Invalid length, end function
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert('Valid passwords have greater than 8 and less than 128 characters.');
    return;
    }

    // Valid length, prompt lowercase
    var lower = window.confirm('Include lowercase letters?');
    if (lower) {
        oneArray = oneArray.concat(lowerCaseLettersAre);
        console.log('include lowercase letters');
    } else {
        console.log('dont include lowercase letters.');
    }

    // prompt uppercase
    var upper = window.confirm('Include uppercase letters?');
    if (upper) {
        oneArray = oneArray.concat(upperCaseLettersAre);
        console.log('include uppercase letters');
    } else {
        console.log('dont include uppercase letters.');
    }

    // prompt numbers
    var numbers = window.confirm('Include numbers?');
    if (numbers) {
        oneArray = oneArray.concat(numericalCharsAre);
        console.log('include numbers');
    } else {
        console.log('dont include numbers.');
    }

    // prompt special
    var special = window.confirm('Include special characters?');
    if (special) {
        oneArray = oneArray.concat(specialCharsAre);
        console.log('include special characters');
    } else {
        console.log('dont include special characters.');
    }
    
    // generatePassword function runs for passwordLength loop results are random from oneArray
    function generatePassword() {
        var results = []
        for (i = 0; i < passwordLength; i++) {
            var randomNumber = [Math.floor(Math.random() * oneArray.length)];
            results.push(oneArray[randomNumber]);
        }
        return results.join("");
    }

    // call generatePassword function
    // generatePassword();

    // assign id password to var passwordText
    var passwordText = document.querySelector("#password");

    // assign var passwordText to function generate password
    passwordText = generatePassword();
}

// window.alert('generate a password');
window.alert('generate a password');

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

