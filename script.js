// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    var minChar = 8;
    var maxChar = 128;
    var passwordLength = parseInt(prompt("Enter the length of your password between 8 and 128"));
    var useLowerCase = true;
    var useUpperCase = true;
    var useNumeric = true;
    var useSpecialChar = true;

    if (passwordLength < minChar) {

        alert("Password length must be more than 8 characters!");

    }

    else if (passwordLength > maxChar) {

        alert("Password length must be less than 128 characters!");

    }

    else {



    }
}