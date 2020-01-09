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

    var passwordLength = parseInt(prompt("Enter the length of your password between 8 and 128"));

    console.log("The length of the password is " + passwordLength);

    var minChar = 8;
    var maxChar = 128;

    if (passwordLength < minChar) {

        alert("Password length must be more than 8 characters!");

    }

    else if (passwordLength > maxChar) {

        alert("Password length must be less than 128 characters!");


    }

    else {

        var useLowerCase = confirm("Click OK to use lowercase characters");
        console.log("Use Lower Case: " + useLowerCase);
        var useUpperCase = confirm("Click OK to use uppercase characters");
        console.log("Use Upper Case: " + useUpperCase);
        var useNumeric = confirm("Click OK to use numbers");
        console.log("Use Numerics: " + useNumeric)
        var useSpecialChar = confirm("Click OK to use special characters");
        console.log("Use Special Characters: " + useSpecialChar);


    }
}