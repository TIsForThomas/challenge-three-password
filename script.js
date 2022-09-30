var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log(passwordText);
}





// validate password the user response

// this function inputs nothing and outputs the completed password
function generatePassword() {
// var amount;
// var lowerCase;
// var upperCase;
// var specialChar;
// var numbers;

    console.log(generateCL())
    console.log(generateLL())
    console.log(generateN())
    console.log(generateSC())
    //call user selection to set password parameters
    var one;
    var two;
    var three; 
    var four;
    var five;
    [one, two, three, four, five] = userSelection();
    //use parameters to generate password
    var passWord = "";
    while (passWord.length < one) {
        //generate a character in the var passWord
        var x = numGen(0, 3);
        var arrayGen = ["", "", "", ""];
        arrayGen[0] = generateCL();
        arrayGen[1] = generateLL();
        arrayGen[2] = generateN();
        arrayGen[3] = generateSC();
        var notcharacter = arrayGen[x];

        // if (lowerCase === false) {
        //     generateCL() = null;
        //  }
        //  else { 
        //     return passWord
        //  }


        passWord = notcharacter + passWord;
    }
    return passWord
    // ask the user for password length and presence of lowercase uppercase numbers and special characters

}
// pick from char-codes what character we use for one password character and convert them to strings
// this function inputs and outputs capital letter in string type
function generateCL() {
    var x = numGen(65, 90);
    var myChar = String.fromCharCode(x);
    return myChar
}
// this function inputs and outputs lowercase letter in string type
function generateLL() {
    var x = numGen(97, 122);
    var myChar = String.fromCharCode(x);
    return myChar
}
// this function inputs and outputs number in string type
function generateN() {
    var x = numGen(48, 57);
    var myChar = String.fromCharCode(x);
    return myChar
}
// this function inputs and outputs special character in string type
function generateSC() {
    var special = ["!", "\"", "#", "$", "%", "&", "^", "'", "(", ")", "+", ",", "-", ".", "/", ";", ":", "<", ">", "=", "?", "@", "[", "]", "", "_", "{", "}", "~"]
    var x = numGen(0, special.length)
    var myChar = special[x]
    // var x = numGen(65, 90);
    // var spring = String.fromCharCode(x);
    return myChar
}
// ask the user for password length and presence of lowercase uppercase numbers and special characters and validate responses
// this function inputs and outputs password length and selection of characters and outputs user selection in array form
function userSelection() {

    var amount = 0;
    var lowerCase = false;
    var upperCase = false;
    var specialChar = false;
    var numbers = false;
    while (true) {
        //ask the user how many characters they want
        amount = prompt("How many characters do you want in your password (8-128)", "12");
        amount = parseInt(amount);
        console.log(amount);
        if (typeof amount === 'number') {
            if (amount <= 128 && amount >= 8) {
                break;
            }
            else if (Object.is(amount, NaN)) {
                alert("Please enter a valid number between (8-128)");
                console.log("amount was not a number");

            }
            else {
                alert("Please enter a valid number between (8-128)");
                console.log("number was not between 8-128");
            }
        }
        else {
            alert("Please enter a valid number between (8-128)");
            console.log("amount ===! number");
        }

    }
    while (true) {
        //ask the user if they want lowercase
        lowerCase = confirm("Do you want lowercase characters?");
        //ask the user if they want uppercase
        upperCase = confirm("Do you want uppercase characters?");
        //ask the user if they want numbers
        numbers = confirm("Do you want numbers?");
        //ask the user if they want special characters
        specialChar = confirm("Do you want special characters?");

        if (!(lowerCase === false && upperCase === false && numbers === false && specialChar === false)) {
            return [amount, lowerCase, upperCase, numbers, specialChar];

            //if none of them are false we can exit the loop
        }
        else {

            alert("Please select 1 or more of the criteria");
        }
    }
    // return [amount, lowerCase, upperCase, numbers, specialChar];



}




//generates a number between 2 numbers inputs min and max value from character generators, output number
function numGen(min, max) {
    var x = Math.floor(Math.random() * (max - min + 1)) + min;
    return x;
}




















































// Assignment Code

// Write password to the #password input


// Add event listener to generate button

