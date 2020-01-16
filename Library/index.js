
let myLibrary = [];

function Book(author, title, pages, read){
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book){
  myLibrary.push(book);
}

function render(){
  var booksDiv = document.getElementById("books");
  booksDiv.innerHTML = "";
  if(myLibrary.length == 0){
    //No Books Here Dialogue
    var noBooks = document.createElement("h2");
    noBooks.innerHTML = "No Books Here";
    noBooks.id = "noBooks";
    booksDiv.appendChild(noBooks);
  }
  else{
    //Creates Book Previews
    myLibrary.forEach(book => {
      var bookElement = document.createElement("div");
      bookElement.className = "book";
      bookElement.innerHTML =
      `
      Author: ` + book.author + `<br/>
      Title: ` + book.title + `<br/>
      Pages: ` + book.pages + `<br/>
      Read: ` + book.read + `<br/>
      `
      booksDiv.append(bookElement);
    });
  }
}
