const wordsArray = ["level", "deed", "hello", "radar"];

// Arrow Function
const getPalindromes = arr => {
  const palindromes = arr.filter(word => word === word.split('').reverse().join(''));
  console.log("Palindromes:", palindromes);
};

getPalindromes(wordsArray);
