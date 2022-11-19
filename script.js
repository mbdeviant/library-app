const container = document.getElementById('card-container');
const newBookButton = document.getElementById('new-book');


let myLibrary = [];
let log = console.log;

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;

}

function addToLibrary(book) {
    myLibrary.push(book);
}

newBookButton.addEventListener('click',()=>{
    
});

let newbook = new Book('ahmet', 'mehmet', '12');
let anotherBook = new Book('foo', 'bar', '152');
let yetAnotherBook = new Book('bar', 'foo', '512');
let aNewOne = new Book('alice', 'potato', '231');
addToLibrary(newbook);
addToLibrary(anotherBook);
addToLibrary(yetAnotherBook);
addToLibrary(aNewOne);

function createBookCard(){
    myLibrary.forEach((item)=>{
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');

        title.innerHTML = item.title;
        author.innerHTML = item.author;
        pages.innerHTML = item.pages;

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);

        container.appendChild(bookCard);
    });
}
createBookCard();



