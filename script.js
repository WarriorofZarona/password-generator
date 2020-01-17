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

// Starting my coding here
function generatePassword() {

    // Ask the user for a password length

    var passwordLength = parseInt(prompt("Enter the length of your password between 8 and 128"));

    // Setting the min and max characters for the prompt
    var minChar = 8;
    var maxChar = 128;

    // If the password is not a number, an alert pops up to warn the user, who must click the button again

    if (isNaN(passwordLength)) {

        alert("You must choose a number!");

    }

    // If the password is less than 8 characters, an alert pops up to warn the user, who must click the button again

    else if (passwordLength < minChar) {

        alert("Password length must be more than 8 characters!");
        passwordLength = 0;

    }


    // If the password is more than 128 characters, an alert pops up to warn the user, who must click the button again

    else if (passwordLength > maxChar) {

        alert("Password length must be less than 128 characters!");
        passwordLength = 0;


    }


    // User inputs the booleans which will be used later to generate the password based on the criteria

    else {

        var useLowerCase = confirm("Click OK to use lowercase characters");
        var useUpperCase = confirm("Click OK to use uppercase characters");
        var useNumeric = confirm("Click OK to use numbers");
        var useSpecialChar = confirm("Click OK to use special characters");

    }

    // If the booleans are all false, this alert will pop up and the code will stop

    if (useLowerCase === false && useUpperCase === false && useNumeric === false && useSpecialChar === false) {

        alert("You must choose atleast ONE type of character to use for your password!");
    }

    else {



        // These are the strings that will be used to generate the password

        var charLower = "abcdefghijklmnopqrstuvwxyz";
        var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var charNum = "0123456789";
        var charSpecial = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

        // These variables will eventually store the string/array of characters to be used for password generation

        var charStr = ""
        var guaranteedChar = []

        // Created a random generator function to be used in the rest of the code
        function randomNum(a) {

            var number = Math.floor(Math.random() * a.length);
            return number;

        }


        // This function looks for any true inputs, then takes the corresponding string and concatenates it into charStr as one string
        // It will also take one random character from any true value strings to be pushed in an array for later

        function pushChar(x, y) {

            if (y) {

                charStr += (x);
                guaranteedChar.push(x[randomNum(x)]);
            }
        }

        // The function runs through each of the variables

        pushChar(charLower, useLowerCase);
        pushChar(charUpper, useUpperCase);
        pushChar(charNum, useNumeric);
        pushChar(charSpecial, useSpecialChar);


    }

    // This loop will run for as long as the length of passwordLength, randomly choosing a character from charStr and 
    // placing it into passwordStr until finished

    for (var i = 0, passwordStr = ""; i < passwordLength; i++) {

        passwordStr += charStr[randomNum(charStr)];
    }

    // This will turn passwordStr from a string into an array called passwordArray
    // This step was necessary as arrays make it easier to replace its values versus replacing each character of a string
    var passwordArray = passwordStr.split("");


    // This loop will replace the index of passwordArray with the index of guaranteedChar so that any true confirms 
    //for a character will show up in the final password

    for (var i = 0; i < guaranteedChar.length; i++) {

        passwordArray[i] = guaranteedChar[i];

    }

    // This will finally turn the array back into a single string called finalPassword
    var finalPassword = passwordArray.join('');


    //This will return the value of finalPassword
    return finalPassword;


}