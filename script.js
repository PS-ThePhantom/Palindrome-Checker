const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
  if (input.value) {
    const regexAlphabet = /[a-z0-9]/;
    const inputToLower = input.value.toLowerCase();
    let cleanWord = "";
    let reverseWord = "";

    for (const char of inputToLower) {

      if (char.match(regexAlphabet)) {
        cleanWord += char;
        reverseWord = char + reverseWord;
      }
    }

    result.innerText = `${input.value} is ${cleanWord === reverseWord ? "" : "not "}a palindrome`;
    input.value = "";
  } else {
    alert("Please input a value");
  }
};

checkButton.addEventListener("click", checkPalindrome);