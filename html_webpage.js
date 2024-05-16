// Flag to track whether the array has been displayed or not
let isDisplayed = false;

// Function to display the array
function displayArray() {
  // If the array has not been displayed yet
  if (!isDisplayed) {
    // Format the array list
    const formattedOutput = formatArrayList(myArrayList);
    // Get the output div element
    const outputDiv = document.getElementById("output");
    // Set the inner HTML of the output div to the formatted output
    outputDiv.innerHTML = formattedOutput;
    // Set the flag to true to indicate that the array has been displayed
    isDisplayed = true;
  } else {
    // If the array has already been displayed, clear the output div
    outputDiv.innerHTML = "";
    // Set the flag to false to indicate that the array is no longer displayed
    isDisplayed = false;
  }
}

// Function to format the array list
function formatArrayList(arrayList) {
  // Initialize the formatted output string
  let formattedOutput = "";
  // Loop through each item in the array list
  arrayList.forEach((item) => {
    // Add a div element to the formatted output
    formattedOutput += `<div style = "color: chartreuse; font-weight: bold;">`;
    // Loop through each key in the item
    for (let key in item) {
      // Add a paragraph element to the formatted output with the key and value
      formattedOutput += `<p>${key}: ${
        Array.isArray(item[key]) ? item[key].join(", ") : item[key]
      }</p>`;
    }
    // Close the div element
    formattedOutput += `</div>`;
  });
  // Return the formatted output
  return formattedOutput;
}

// Get the output div element
const outputDiv = document.getElementById("output");
// Set the inner HTML of the output div to the JSON string representation of myArrayList
outputDiv.innerHTML = JSON.stringify(myArrayList, null, 2);
