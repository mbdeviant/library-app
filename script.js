let myLibrary = [];
let log = console.log;

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;

}

function addToLibrary(book){
    myLibrary.push(book);
}

addToLibrary.prototype = Object.create(Book.prototype);

let newbook = new Book('ahmet','mehmet','12');
let anotherBook = new Book('foo','bar','152')
addToLibrary(newbook);
addToLibrary(anotherBook);

log(myLibrary[1].pages);

