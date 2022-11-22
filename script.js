const container = document.getElementById('card-container');
const newBookButton = document.getElementById('new-book-button');
const overlay = document.getElementById('form-overlay');
const form = document.getElementById('book-form');

let myLibrary = [];

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
});

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
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttons = document.createElement('div')
    const removeButton = document.createElement('button');
    const readStatus = document.createElement('button');
    bookCard.classList.add('book-card');
    buttons.classList.add('card-buttons');
    removeButton.classList.add('remove-button');

    removeButton.innerHTML = 'Remove';
    readStatus.innerHTML = 'Read Status';

    for (let i = 0; i < myLibrary.length; i++) {
        title.innerHTML = `"${myLibrary[i].title}"`;
        author.innerHTML = `by ${myLibrary[i].author}`;
        pages.innerHTML = `${myLibrary[i].pages} pages`;
        if (myLibrary[i].isRead == true) {
            readStatus.innerHTML = '✔';
            readStatus.style.background = '#00B300';
        }
        else {
            readStatus.innerHTML = '✖';
            readStatus.style.background = '#CD5C27';
        }
    }
    readStatus.addEventListener('click', () => {
        (readStatus.innerHTML == '✔') ? readStatus.innerHTML = '✖' : readStatus.innerHTML = '✔';
        (readStatus.innerHTML == '✖') ? readStatus.style.background = '#CD5C27' : readStatus.style.background = '#00B300';
    });
    removeButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(i), 1);
        container.removeChild(bookCard);
    });

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    buttons.appendChild(removeButton);
    buttons.appendChild(readStatus);
    bookCard.appendChild(buttons);
    container.appendChild(bookCard);
}

function closeOverlay() {
    overlay.style.display = 'none';
}