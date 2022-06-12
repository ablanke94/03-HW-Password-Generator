var generateBtn = document.querySelector("#generate");

const numOfCharactersPrompt = () => {

  // get length of desired password
  let numOfCharsInput = Number(prompt("How many characters will be in your password? Choose between 8-128 characters:"));

  if (!numOfCharsInput || Number.isNaN(numOfCharsInput)) {
    return;
  }

  if (numOfCharsInput < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  if (numOfCharsInput > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }

  return numOfCharsInput;
}

// all the characters that could be in the password
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numeric = "1234567890";
const special = ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`\{|\}~`;

//this function prompts the user to include certain characters in password
const getUserOptions = () => {

  // make a string that will have all the possible options the user wants at the end
  let possibleChars = "";
  if (confirm("Include lowercase?")) {
    possibleChars += lowercase;
  }
  if (confirm("Include uppercase?")) {
    possibleChars += uppercase;
  }
  if (confirm("Include numbers?")) {
    possibleChars += numeric;
  }
  if (confirm("Include special characters?")) {
    possibleChars += special;
  }
  //if user did not click OK to any of the prompts, password will not be generated
  if (possibleChars === "") {
    alert("Please include at least one option.");
    return;
  }
  return possibleChars;
}

const generatePassword = () => {

  // get all the options in one place
  const numOfCharacters = numOfCharactersPrompt();
  const possibleChars = getUserOptions();

  // exit if user didn't put anything in
  if (numOfCharacters === undefined) {
    return "";
  }
  if (possibleChars === undefined) {
    return "";
  }

  // empty string to put pw into
  let newPassword = "";

  // need to -1 on length because index 0 (could start on i=1?)
  for(i=0; i <= numOfCharacters-1; i++){
    let ranNum = Math.floor(Math.random() * possibleChars.length);
    newPassword += possibleChars[ranNum];
  }

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 