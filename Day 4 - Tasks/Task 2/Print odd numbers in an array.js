const numbersArray = [1, 2, 3, 4, 5];

// Arrow Function
const printOddNumbers = arr => {
  const oddNumbers = arr.filter(num => num % 2 !== 0);
  console.log("Odd Numbers:", oddNumbers);
};

printOddNumbers(numbersArray);
