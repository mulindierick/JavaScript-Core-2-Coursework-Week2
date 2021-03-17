function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector("#content");
  let pTag = document.createElement('p')
  content.appendChild(pTag)

  let selectTag = document.createElement('select')
  selectTag.setAttribute("id", "selected")
  content.appendChild(selectTag)

  for (let i = 0; i < colours.length; i++) {
        let optionTag = document.createElement('option')
        let optionContent = document.createTextNode(`${colours[i]}`)
        optionTag.appendChild(optionContent)
        selectTag.appendChild(optionTag);
    }
    document.getElementById("selected").addEventListener("change", function(){
      let selectedValue = document.getElementById("selected").value;
      pTag.innerHTML = `You have selected: ${selectedValue}`
      pTag.style.color = selectedValue;
    })
  }


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
