const wordsArray = ["level", "deed", "hello", "radar"];

// Using Anonymous Function
const getPalindromes = function(arr) {
  const palindromes = arr.filter(word => word === word.split('').reverse().join(''));
  console.log("Using Anonymous Function");
  console.log("Palindromes:", palindromes);
};

getPalindromes(wordsArray);

// Using IIFE
(function(arr) {
  const palindromes = arr.filter(word => word === word.split('').reverse().join(''));
  console.log("\nUsing IIFE");
  console.log("Palindromes:", palindromes);
})(wordsArray);
