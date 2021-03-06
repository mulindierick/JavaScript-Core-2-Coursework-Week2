function highlightWords(paragraph, colours) {
  // Write your code here...
  let content = document.querySelector("#content");
  let spiltedP = paragraph.split(" ");

  let paragraphTag = document.createElement("p");
  content.appendChild(paragraphTag);

  for (let i = 0; i < spiltedP.length; i++) {
    let spanP = document.createElement("span");
    let pContent = document.createTextNode(` ${spiltedP[i]}`);
     spanP.appendChild(pContent);
     paragraphTag.appendChild(spanP)
  }

  let selectTag = document.createElement('select')
  selectTag.setAttribute("id", "selected")
  content.appendChild(selectTag)

  for (let i = 0; i < colours.length; i++) {
        let optionTag = document.createElement('option')
        let optionContent = document.createTextNode(`${colours[i]}`)
        optionTag.appendChild(optionContent)
        selectTag.appendChild(optionTag);
    }
    



    let style = document.createElement("style")
    content.insertAdjacentElement("beforebegin", style)

    let spanEvent = document.getElementsByTagName("span");

    for (let i = 0; i < spanEvent.length; i++) {
        document.getElementsByTagName("span")[i].addEventListener("click", function(){
        let selectedValue = document.getElementById("selected").value;
        let textStyle = document.createTextNode(`.${selectedValue} { 
          background-color: ${selectedValue};
        }`)

        if (!(style.contains(textStyle))) {
          style.appendChild(textStyle)
        }
        


        spanEvent[i].classList.toggle(`${selectedValue}`)
      })
    }
    
  }

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
