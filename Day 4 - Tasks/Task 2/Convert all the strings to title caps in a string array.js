const stringArray = ["apple", "banana", "cherry", "date"];

// Arrow Function
const convertToTitleCaps = arr => {
  const titleCapsArray = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  console.log("Title Caps Array:", titleCapsArray);
};

convertToTitleCaps(stringArray);
