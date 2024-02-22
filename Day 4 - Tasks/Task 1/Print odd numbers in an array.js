const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Using Anonymous Function
const printOddNumbers = function(arr) {
  const oddNumbers = arr.filter(num => num % 2 !== 0);
  console.log("Anonymous Function output for Odd Numbers:", oddNumbers.join(', '));
};
printOddNumbers(numbers);

// Using IIFE
(function(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log("IIFE output for Odd Numbers:", oddNumbers.join(', '));
  })(numbers);