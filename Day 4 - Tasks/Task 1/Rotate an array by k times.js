const rotateArray = [1, 2, 3, 4, 5];

// Using Anonymous Function
function rotateByK(arr, k) {
  const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  console.log("Using Anonymous Function");
  console.log("Rotated Array:", rotatedArray);
}

rotateByK(rotateArray, 2);

// Using IIFE
(function(arr, k) {
  const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  console.log("\nUsing IIFE");
  console.log("Rotated Array:", rotatedArray);
})(rotateArray, 2);
