function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector("#content");
  let ulTag = document.createElement('ul')
  for (let i = 0; i < arrayOfPeople.length; i++) {
        let liTag = document.createElement('li')
        let liContent = document.createTextNode(`${arrayOfPeople[i]}`)
        ulTag.appendChild(liTag)
        liTag.appendChild(liContent);
    }
    content.appendChild(ulTag)
  }


let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
