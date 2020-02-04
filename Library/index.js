
var myLibrary = [];

var dialogueOpen = false;

function Book(author, title, pages, read){
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book){
  myLibrary.push(book);
}

function openDialogue(){
  if(!dialogueOpen){
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
    document.getElementById("bookDialogue").style.display = "block";
  }
  dialogueOpen = true;
}

function closeDialogue(){
  document.getElementById("bookDialogue").style.display = "none";
  dialogueOpen = false;
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
      `;
      booksDiv.append(bookElement);
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "delete";
      deleteButton.value = myLibrary.indexOf(book);
      deleteButton.onclick = function(){
        myLibrary.splice(this.value, 1);
        render();
      };
      bookElement.append(deleteButton);
      bookElement.innerHTML = bookElement.innerHTML+"<br/>Read ";
      var readToggle = document.createElement("input");
      readToggle.value = myLibrary.indexOf(book);
      readToggle.type = "checkbox";
      readToggle.checked = book.read;
      readToggle.onclick = function(){
        console.log(this.checked);
        console.log(this.value);
        myLibrary[this.value].read = this.checked;
        render();
        console.log(this.checked);
        console.log(this.value);
      };
      bookElement.append(readToggle);
    });
  }
}

function addBook(){
  author = document.getElementById("author").value;
  title = document.getElementById("title").value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("read").checked;
  if(author == "" || title == "" || pages == ""){
    alert("Please enter the info");
  }
  else{
    addBookToLibrary(new Book(author, title, pages, read));
    closeDialogue();
    render();
  }
}
