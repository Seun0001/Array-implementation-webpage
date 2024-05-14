let myArrayList = [];
myArrayList = [
  {
    fullName: ["Afolabi Oluwaseun"],
    country: ["Nigeria"],
    emailAddress: ["oluwaseunafolabi941@gmail.com"],
    github: ["github.com./Seun0001"],
  },
];

myArrayList.push(
  { OperatingSystemUsed: "Linux Mint" },
  { CurrentInternCompany: "Flexisaf" }
);

console.log(myArrayList.map(Object.values).flat().join("\n"));
