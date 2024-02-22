const duplicateArray = [1, 2, 2, 3, 4, 4, 5];

// Using Anonymous Function
function removeDuplicates(arr) {
  const uniqueSet = new Set(arr);
  const uniqueArray = Array.from(uniqueSet);
  console.log("Using Anonymous Function");
  console.log("Array without Duplicates:", uniqueArray);
}

removeDuplicates(duplicateArray);

// Using IIFE
(function(arr) {
  const uniqueSet = new Set(arr);
  const uniqueArray = Array.from(uniqueSet);
  console.log("\nUsing IIFE");
  console.log("Array without Duplicates:", uniqueArray);
})(duplicateArray);
