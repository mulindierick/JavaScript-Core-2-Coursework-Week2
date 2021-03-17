 let completed = false;
 let style = document.createElement("style")
              content.insertAdjacentElement("beforebegin", style)
              style.textContent = `.apply-line-through { 
                text-decoration: line-through;
              }`

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
         let todo = document.getElementById("todoInput").value; 
         todos.push({ task: `${todo}`, completed: completed })
         document.getElementById("todoInput").value = " "; 



         for (let i = 0; i < todos.length; i++) {
          
         let lastTodo = todos.length - 1;
         let li = document.createElement("li");

          if (todos[i] === todos[lastTodo]) {
          li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center")
          let span = document.createElement("span")
          span.setAttribute("class", "badge bg-primary rounded-pill")
          let completedbtn = document.createElement("i")
          completedbtn.setAttribute("class", "fa fa-check")
          completedbtn.addEventListener("click", function(){
              li.classList.toggle("apply-line-through")
              if (todos[i].completed === false) {
                todos[i].completed = true;
                return todos;
              }else{
                todos[i].completed = false;
                return todos;
              }
          })
          let deleteBtn = document.createElement("i") 
          deleteBtn.setAttribute("class", "fa fa-trash")
          deleteBtn.addEventListener("click", function(event){
              deleteAllCompletedTodos()
          })

          let liContent = document.createTextNode(`${todos[i].task}`)

          if (todo !== " ") {
            li.appendChild(liContent)
            span.appendChild(completedbtn)
            span.appendChild(deleteBtn)
            li.appendChild(span)
            list.appendChild(li)
          }else{
          alert("text field is empty")
        }
      }
    }
    // return todos
}


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  document.getElementById("add-to-do").addEventListener("click", populateTodoList(todos) )
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
let allLis = document.getElementsByTagName("li");
             for (let i = 0; i < allLis.length; i++) {
               if (allLis[i].classList.contains("apply-line-through")) {
                let removedItem = { task: `${allLis[i].value}`, completed: `${todos[i].completed}` }
                let index = todos.indexOf(removedItem)
                todos.splice(index, 1)
                  allLis[i].remove();
                  return todos;
               }
              }
 
}