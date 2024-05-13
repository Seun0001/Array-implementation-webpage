function displayArray() {
  const formattedOutput = formatArrayList(myArrayList);
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = formattedOutput;
}

function formatArrayList(arrayList) {
  let formattedOutput = "";
  arrayList.forEach((item) => {
    formattedOutput += `<div>`;
    for (let key in item) {
      formattedOutput += `<p>${key}: ${
        Array.isArray(item[key]) ? item[key].join(", ") : item[key]
      }</p>`;
    }
    formattedOutput += `</div>`;
  });
  return formattedOutput;
}

const outputDiv = document.getElementById("output");
outputDiv.innerHTML = JSON.stringify(myArrayList, null, 2);
