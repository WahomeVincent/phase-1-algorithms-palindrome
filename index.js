function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function isPalindrome(s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Check if the string is the same forwards and backwards
  return s === s.split("").reverse().join("");
}
