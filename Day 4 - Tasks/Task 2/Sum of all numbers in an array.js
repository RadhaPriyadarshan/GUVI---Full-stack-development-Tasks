const numbersArray = [1, 2, 3, 4, 5];

// Arrow Function
const sumOfNumbers = arr => {
  const sum = arr.reduce((total, num) => total + num, 0);
  console.log("Sum of Numbers:", sum);
};

sumOfNumbers(numbersArray);
