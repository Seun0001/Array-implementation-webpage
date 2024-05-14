// Define the myArrayList variable
let myArrayList = [];
myArrayList = [
  {
    fullName: ["Afolabi Oluwaseun"],
    country: ["Nigeria"],
    emailAddress: ["oluwaseunafolabi941@gmail.com"],
    github: ["github.com./Seun0001"],
  },
];

// Push two more objects to the myArrayList array
myArrayList.push(
  { OperatingSystemUsed: "Linux Mint" },
  { CurrentInternCompany: "Flexisaf" }
);

// Log the array list as a string with each value on a new line
console.log(myArrayList.map(Object.values).flat().join("\n"));

// Create a new array with the fullName property removed from each item
const reducedArray = myArrayList
  .map((item) => {
    const { fullName, ...rest } = item;
    return rest;
  })
  // Flatten the array of arrays into a single array
  .reduce((acc, item) => {
    return [...acc, ...Object.values(item)];
  }, []);

// Log the reduced array
console.log(reducedArray);
