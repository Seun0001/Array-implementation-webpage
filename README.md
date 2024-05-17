# Array Implementation Webpage

```diff

+ This webpage displays an array as a formatted HTML string. The array is initially hidden, and can be displayed by clicking the "Display Array" button, while creating the mobile and pc view.

+ The array is defined in a `html_webpage.js` file, and is displayed using the `displayArray` and `formatArrayList` functions. The `displayArray` function is called when the "Display Array" button is clicked, and the `formatArrayList` function formats the array as an HTML string.

+ The `html_webpage.js` file also contains a `console.log` statement that logs the array as a string with each value on a new line. This is done using the `map`, `Object.values`, `flat`, and `join` methods.

- The `console.js` file in the `console` folder is not used in this webpage.

+ The `style.css` file contains the styles for the webpage.

! The map method is used in the console.log statement to log each value of the array on a new line.

! The Object.values method is used in the console.log statement to get the values of the array.

! The flat method is used in the console.log statement to flatten the array.

! The join method is used in the console.log statement to join the array elements into a string.

! The Let is used for array list and to track whether the array has been displayed or not.

! The Const is used to get the output of the div element.

! The filter(), map(), flat(), join(), and reduce() method i use to extract, transform, and concatenate data from an array of objects.

! The code begins by defining an array myArrayList containing objects with various properties such as fullName, country, emailAddress, github, OperatingSystemUsed, and CurrentInternCompany.

! The filter() method is then applied to extract only the objects where the country property includes "Nigeria".

! The map() method is used to extract the values of the objects, followed by the flat() method to flatten the array of arrays into a single array. The join() method is then applied to concatenate the elements of the array into a single string, separated by newline characters.

! Finally, the reduce() method is used to concatenate the values of the objects in the filtered array, separated by newline characters.

+ ## Author: Afolabi John Oluwaseun

+ ### Project Rate: _100% Complete_

```

[![Netlify Status](https://api.netlify.com/api/v1/badges/3a3e7699-a572-4809-9c5d-2ae891422535/deploy-status)](https://app.netlify.com/sites/array-implementation-webpage/deploys)
