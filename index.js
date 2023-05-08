const search = document.getElementById("search");
const resultD = document.getElementById("result");
const searchButton = document.getElementById("sButton");

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function searchFunction(name, prop) {
  for (x = 0; x < contacts.length; x++) {
    const fullName = contacts[x].firstName + " " + contacts[x].lastName;
    if (fullName === name) {
      return "found";
    }
  }
  return "not found";
}

searchButton.addEventListener("click", function () {
  const name = search.value;
  const result = searchFunction(name);
  resultD.innerHTML = result;
});
