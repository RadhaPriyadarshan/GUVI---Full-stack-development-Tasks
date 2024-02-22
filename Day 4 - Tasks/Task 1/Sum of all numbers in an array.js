const numbersArray = [1, 2, 3, 4, 5];

// Using Anonymous Function
const sumOfNumbers = function(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  console.log("Using Anonymous Function");
  console.log("Sum of Numbers:", sum);
};

sumOfNumbers(numbersArray);

// Using IIFE
(function(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  console.log("\nUsing IIFE");
  console.log("Sum of Numbers:", sum);
})(numbersArray);
