function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let ulTag = document.createElement('ul')
  ulTag.style.cssText = 'list-style-type: none; display: flex; justify-content: center; height: 60vh; margin-top: 20vh'; 
  for (let i = 0; i < books.length; i++) {
      if ( books[i].alreadyRead === true) {
        let liTag = document.createElement('li')
        let paragraph = document.createElement('p')
        let pContent = document.createTextNode(`${books[i].title} - ${books[i].author} `)
        paragraph.appendChild(pContent)
        liTag.appendChild(paragraph)
        let image = document.createElement('img');
        liTag.appendChild(image);
         if (books[i].title === "The Most Human Human") {
          image.src = "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg"
          image.style.cssText = ' width: 190px;'
        }else if(books[i].title === "The Pragmatic Programmer"){
          image.src = " https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg"
          image.style.cssText = ' width: 190px;'
        }
        liTag.style.cssText = 'background-color: green; padding: 1rem; flex-basis: 25%; margin-right:2rem'
        // liTag.style.cssText = 'background-color: green; width: 30%; height: 50vh; float: left; margin: 10rem 0.5rem 0rem 0.5rem; padding: 1rem'; 
        ulTag.appendChild(liTag);
      }else{
        let liTag = document.createElement('li')
        let paragraph = document.createElement('p')
        let pContent = document.createTextNode(`${books[i].title} - ${books[i].author} `)
        let image = document.createElement('img')
        paragraph.appendChild(pContent)
        liTag.appendChild(paragraph)
        if (books[i].title === "The Design of Everyday Things") {
          image.src = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
          image.style.cssText = ' width: 200px;'
        }
        liTag.appendChild(image)
        liTag.style.cssText = 'background-color: red; padding: 1rem; flex-basis: 25%; margin-right:2rem'
        // liTag.style.cssText = 'background-color: red; width: 30%; height: 50vh; float: left; margin: 10rem 0.5rem 0rem 0.5rem'; 
        ulTag.appendChild(liTag);
      }
  }
  content.appendChild(ulTag)
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);

