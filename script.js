const container = document.getElementById('card-container');
const newBookButton = document.getElementById('new-book');
const overlay = document.getElementById('form-overlay');
const form = document.getElementById('book-form');



let myLibrary = [];
let log = console.log;

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;

}

newBookButton.addEventListener('click', () => {
    overlay.style.display = 'block';
});

overlay.addEventListener('click', (e) => {
    if (e.target == overlay) closeOverlay();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addToLibrary();
    createBookCard();
    closeOverlay();
    log(myLibrary);
})


function addToLibrary() {
    const bookTitle = document.getElementById('book-title').value;
    const bookAuthor = document.getElementById('book-author').value;
    const bookPages = document.getElementById('book-pages').value;
    let newBook = new Book(bookTitle, bookAuthor, bookPages);


    myLibrary.push(newBook);
    form.reset();
}

function createBookCard(i) {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const removeButton = document.createElement('button');
    const readStatus = document.createElement('button');
    bookCard.classList.add('book-card');

    removeButton.innerHTML = 'Remove';//not functional
    readStatus.innerHTML = 'Read Status';

    for (let i = 0; i < myLibrary.length; i++) {
        title.innerHTML = `"${myLibrary[i].title}"`;
        author.innerHTML = `by ${myLibrary[i].author}`;
        pages.innerHTML = `${myLibrary[i].pages} pages`;
    }

    readStatus.addEventListener('click', () => {
        (readStatus.innerHTML == 'Read') ? readStatus.innerHTML = 'Not Read' : readStatus.innerHTML = 'Read';
        (readStatus.innerHTML == 'Read') ? readStatus.style.background = 'Green' : readStatus.style.background = 'Red';
    });
    removeButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(i), 1);
        container.removeChild(bookCard);
        log(myLibrary);
    });

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(removeButton);
    bookCard.appendChild(readStatus);
    container.appendChild(bookCard);
}

function closeOverlay() {
    overlay.style.display = 'none';
}
