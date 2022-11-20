const container = document.getElementById('card-container');
const newBookButton = document.getElementById('new-book');
const overlay = document.getElementById('form-overlay');
const form = document.getElementById('form-container');
const submitButton = document.getElementById('book-submit');


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

newBookButton.addEventListener('click', () => {
    overlay.style.display = 'block';
});

overlay.addEventListener('click', (e) => {
    if (e.target == overlay) overlay.style.display = 'none';
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    addNewBook();
});


function createBookCard() {

    myLibrary.forEach((item) => {

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


function addNewBook() {
    const bookTitle = document.getElementById('book-title').value;
    const bookAuthor = document.getElementById('book-author').value;
    const bookPages = document.getElementById('book-pages').value;


    let newBook = new Book(bookTitle, bookAuthor, bookPages);
    addToLibrary(newBook);
    
    createBookCard();

} 
