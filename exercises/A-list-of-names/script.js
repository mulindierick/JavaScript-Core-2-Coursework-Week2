function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (let i = 0; i < arrayOfPeople.length; i++) {
    for (const key in arrayOfPeople[i]) {
      if (key === "job") {
         let hTwo = document.createElement('h2')
         let hTwoContent = document.createTextNode(`${arrayOfPeople[i][key]}`)
         hTwo.appendChild(hTwoContent)
         content.appendChild(hTwo);
      }else{
        let hOne = document.createElement('h1')
        let hOneContent = document.createTextNode(`${arrayOfPeople[i][key]}`)
        hOne.appendChild(hOneContent)
        content.appendChild(hOne);
      }
    }
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
