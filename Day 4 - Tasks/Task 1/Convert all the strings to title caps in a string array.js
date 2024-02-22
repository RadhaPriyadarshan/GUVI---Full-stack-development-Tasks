const stringArray = ["apple", "banana", "cherry", "date"];

// Using Anonymous Function
const convertToTitleCaps = function(arr) {
  const titleCapsArray = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  console.log("Using Anonymous Function");
  console.log("Original Array:", arr);
  console.log("Title Caps Array:", titleCapsArray);
};
convertToTitleCaps(stringArray);

// Using IIFE
(function(arr) {
  const titleCapsArray = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  console.log("\nUsing IIFE");
  console.log("Original Array:", arr);
  console.log("Title Caps Array:", titleCapsArray);
})(stringArray);
