const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

// Using Anonymous Function
const getMedian = function(arr1, arr2) {

  const mergedArray = arr1.concat(arr2);
  const length = mergedArray.length;
  const middleIndex = Math.floor(length / 2);

  let median;
  if (length % 2 === 0) {
    median = (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
  } else {
    median = mergedArray[middleIndex];
  }

  console.log("Using Anonymous Function");
  
  console.log("Median:", median);
};

getMedian(array1, array2);

// Using IIFE
(function(arr1, arr2) {
 
  const mergedArray = arr1.concat(arr2);
  const length = mergedArray.length;
  const middleIndex = Math.floor(length / 2);

  let median;
  if (length % 2 === 0) {
    median = (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
  } else {
    median = mergedArray[middleIndex];
  }

  console.log("\nUsing IIFE");
  console.log("Median:", median);
})(array1, array2);
