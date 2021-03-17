function todoList(todos) {
  // Write your code here...
 
  let content = document.querySelector("#content");
  let ulTag = document.createElement('ul')
  for (let i = 0; i < todos.length; i++) {
        let liTag = document.createElement('li')
        let liContent = document.createTextNode(`${todos[i].todo}`)
        liTag.setAttribute("class", "line-through")
        ulTag.appendChild(liTag)
        liTag.appendChild(liContent);
  }
    content.appendChild(ulTag)

    let style = document.createElement("style")
    content.insertAdjacentElement("beforebegin", style)
    style.textContent = `.apply-line-through { 
      text-decoration: line-through;
    }`
    let x = document.getElementsByClassName("line-through");
    for (let i = 0; i < x.length; i++) {
      x[i].addEventListener("click", function(){
          x[i].classList.toggle("apply-line-through");
        })
      
    }
  }

  

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);
