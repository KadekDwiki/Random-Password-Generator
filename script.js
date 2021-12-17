// password value
const password = document.getElementById("password");
// length
const length = document.getElementById("length");
// checkbox
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
// btn generate
const btnGenerate = document.getElementById("generate");
// btn copy
const copy = document.getElementById("copy");
// character
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

btnGenerate.addEventListener("click", function getChar() {
  let passChar = [];
  let i = 0;
  if (upperCase.checked) {
    passChar += uCase;
    i++;
  }
  if (lowerCase.checked) {
    passChar += lCase;
    i++;
  }
  if (number.checked) {
    passChar += numbers;
    i++;
  }
  if (symbol.checked) {
    passChar += symbols;
    i++;
  }
  if (length.value >= 100) {
    alert(" password length at least under 100 characters");
  }
  if (i === 0) {
    alert(" select at least one 1 option");
  }

  // get random pass
  let value = "";

  for (let index = 0; index < length.value; index++) {
    let pass = Math.floor(Math.random() * passChar.length);
    value += passChar.charAt(pass);
  }

  // check
  if (length.value >= 100) {
    password.value = "";
  } else {
    password.value = value;
  }
});

// copy to clipboard
const icon = document.getElementById("icon");
copy.addEventListener("click", () => {
  if (password.value == "") {
    alert("create a password first, before copy to clipboard");
  } else {
    password.select();
    document.execCommand("copy");
    alert("text copied to clipboard");
  }
});
