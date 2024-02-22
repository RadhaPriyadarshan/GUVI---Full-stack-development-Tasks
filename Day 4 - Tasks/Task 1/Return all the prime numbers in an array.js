const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using Anonymous Function
const getPrimeNumbers = function(arr) {
  const primeNumbers = arr.filter(num => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  });
  console.log("Using Anonymous Function");
  console.log("Prime Numbers:", primeNumbers);
};

getPrimeNumbers(numbersArray);

// Using IIFE
(function(arr) {
  const primeNumbers = arr.filter(num => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  });
  console.log("\nUsing IIFE");
  console.log("Prime Numbers:", primeNumbers);
})(numbersArray);
