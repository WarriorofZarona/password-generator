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

    // Ask the user for a password length

    var passwordLength = parseInt(prompt("Enter the length of your password between 8 and 128"));

    console.log("The length of the password is " + passwordLength);

    var minChar = 8;
    var maxChar = 128;

    // If the password is not a number, an alert pops up to warn the user, who must click the button again

    if (isNaN(passwordLength)) {

        alert("You must choose a number!");
        console.log("User must click button again and choose a number");

    }

    // If the password is less than 8 characters, an alert pops up to warn the user, who must click the button again

    else if (passwordLength < minChar) {

        alert("Password length must be more than 8 characters!");
        console.log("User must click button again and choose 8 or more characters");

    }


    // If the password is more than 128 characters, an alert pops up to warn the user, who must click the button again

    else if (passwordLength > maxChar) {

        alert("Password length must be less than 128 characters!");
        console.log("User must click button again and choose 128 or less characters")


    }


    // These confirms assign booleans which will be used later to generate the password based on the criteria

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

    //These are the arrays that will be used to generate the password, may eventually turn into an object

    var charLower = ["abcdefghijklmnopqrstuvwxyz"]
    var charUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    var charNum = ["0123456789"];
    var charSpecial = ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]

}