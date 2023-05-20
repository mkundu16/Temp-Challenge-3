// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//initialize the object for password 
var passwordCriteria = {
  size: 0,
  lowercase: 0,
  uppercase: 0,
  numeric: 0,
  special: 0
}
//this function is called by the event listener "generateBtn.addEventListener"

function writePassword() {

  //call function to prompt user 
  promptCriteria();

  //function that generates the password
  var password = generatePassword();

  //pass the newly generated password back to the text box defined in html
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//function presents the user with a series of prompts to determine the criteria of the password 

var promptCriteria = function() {
  
  while (passwordCriteria.size < 8 || passwordCriteria.size > 128) {
    passwordCriteria.size = prompt("How long should the password be? (8 - 128 characters)")
    if (passwordCriteria.size === null){
      return; //break out of the function early
    }
    if (passwordCriteria.size < 8 || passwordCriteria.size > 128) {
      alert ("Please enter a password size between 8 and 128 characters!");
    }
  }

  while (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0) {
    var lowercaseConfirm = confirm("Would you like to include lowercase letters?");
    if (lowercaseConfirm) {
      passwordCriteria.lowercase = 1;
    }
    var uppercaseConfirm = confirm("Would you like to include uppercase letters?");
    if (uppercaseConfirm) {
      passwordCriteria.uppercase = 1;
    }
    var numericConfirm = confirm("Would you like to include numbers?");
    if (numericConfirm) {
      passwordCriteria.numeric = 1;
    }
    var specialConfirm = confirm("Would you like to include special characters?");
    if (specialConfirm) {
      passwordCriteria.special = 1;
    }
    if (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0){
      alert ("You must choose at least one type of character to include in your password!");
    }
    console.log(passwordCriteria);
  }
}
//this function generates the new password based on the supplied criteria. It appends each character to newPassword.
//and the final password is returned
var generatePassword = function() {
  var newPassword = "";
  for (i = 0; i < passwordCriteria.size; i++){
    // var charType = randomNumber(1, 4);
    var charType = Math.floor(Math.random() * 5);

    //compare tye new charType and if it is a type of character the user wants, generate a random character from that character set.
    if (charType === 1 && passwordCriteria.lowercase === 1) {
      // newPassword += genLowercase();
      newPassword = newPassword + genLowercase();
      console.log(newPassword);
    }
    else if (charType === 2 && passwordCriteria.uppercase === 1) {
      newPassword = newPassword + genUppercase();
      console.log(newPassword);
    }
    else if (charType === 3 && passwordCriteria.numeric === 1) {
      newPassword = newPassword + genNumeric();
      console.log(newPassword);
    }
    else if (charType === 4 && passwordCriteria.special === 1) {
      newPassword = newPassword + genSpecial();
      console.log(newPassword);
    }
    else i--;
    
  }
  return newPassword;
}

// below are the function to generate random lowercase/uppercase/numeric and special character
var genLowercase = function() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

var genUppercase = function() {
  var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return UpperCase[Math.floor(Math.random() * UpperCase.length)];
}

var genNumeric = function() {
  var Numeric = "0123456789";
  return Numeric[Math.floor(Math.random() * Numeric.length)];
}

var genSpecial = function() {
  var SpecialChar = "!@#$%^&*()_+/";
  return SpecialChar[Math.floor(Math.random() * SpecialChar.length)];
}

// Add event listener to generate button (MAKES THE BUTTON ON THE HTML PAGE DO SOMETHING)
generateBtn.addEventListener("click", writePassword);
