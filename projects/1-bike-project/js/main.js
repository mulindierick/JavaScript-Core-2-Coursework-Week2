document.getElementById("blueBtn").addEventListener("click", function() {
    document.getElementById("jumbotron").style.backgroundColor = "#588fbd";
    let bikeBtns = document.getElementsByClassName("btn-lrg");
    bikeBtns[0].style.backgroundColor = "#ffa500"
    bikeBtns[1].style.backgroundColor = "black"
    bikeBtns[1].style.color = "white"

})

document.getElementById("orangeBtn").addEventListener("click", function() {
    document.getElementById("jumbotron").style.backgroundColor = "#f0ad4e";
    let bikeBtns = document.getElementsByClassName("btn-lrg");
    bikeBtns[0].style.backgroundColor = "#5751fd"
    bikeBtns[1].style.backgroundColor = "#31b0d5"
    bikeBtns[1].style.color = "white"

})

document.getElementById("greenBtn").addEventListener("click", function() {
    document.getElementById("jumbotron").style.backgroundColor = "#87ca8a";
    let bikeBtns = document.getElementsByClassName("btn-lrg");
    bikeBtns[0].style.backgroundColor = "black"
    bikeBtns[1].style.backgroundColor = "#8c9c08"
    bikeBtns[1].style.color = "white"

})
document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();
    let emailValue = document.getElementById("exampleInputEmail1").value;
    let nameValue = document.getElementById("example-text-input").value;
    let textareaValue = document.getElementById("exampleTextarea").value;
    if (emailValue.length === 0 || !(emailValue.includes("@"))) {
      document.getElementById("email").style.backgroundColor = "red"
    }
    if (nameValue.length === 0) {
        document.getElementById("name").style.backgroundColor = "red"
    }
    if (textareaValue.length === 0) {
        document.getElementById("yourself").style.backgroundColor = "red"
    } 
    if (nameValue.length !== 0 && textareaValue.length !== 0 && (emailValue.length !== 0 && (emailValue.includes("@")))) {
        alert("thank you")
        document.getElementById("exampleInputEmail1").value = "";
        document.getElementById("example-text-input").value = "";
        document.getElementById("exampleTextarea").value = "";
    }
})
