const container = document.getElementById('card-container');
const newBookButton = document.getElementById('new-book');
const overlay = document.getElementById('form-overlay');
const form = document.getElementById('book-form');

let myLibrary = [];
let log = console.log;

function Book(title, author, pages, checkbox) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = checkbox.checked;
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
    const checkbox = document.getElementById('checkbox');
    let newBook = new Book(bookTitle, bookAuthor, bookPages, checkbox);

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

    removeButton.innerHTML = 'Remove';
    readStatus.innerHTML = 'Read Status';

    for (let i = 0; i < myLibrary.length; i++) {
        title.innerHTML = `"${myLibrary[i].title}"`;
        author.innerHTML = `by ${myLibrary[i].author}`;
        pages.innerHTML = `${myLibrary[i].pages} pages`;
        if (myLibrary[i].isRead == true) {
            readStatus.innerHTML = 'Read'
            readStatus.style.background = 'Green'
            console.log('patates')
        }
        else {
            readStatus.innerHTML = 'Not Read';
            readStatus.style.background = 'Red';
        }
    }

    readStatus.addEventListener('click', () => {
        (readStatus.innerHTML == 'Read') ? readStatus.innerHTML = 'Not Read' : readStatus.innerHTML = 'Read';
        (readStatus.innerHTML == 'Not Read') ? readStatus.style.background = 'Red' : readStatus.style.background = 'Green';
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
