class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(index) {
      this.books.splice(index, 1);
    }
  
    toggleRead(index) {
      this.books[index].read = !this.books[index].read;
    }
  }
  
  class UI {
    constructor(containerSelector) {
      this.container = document.querySelector(containerSelector);
    }
  
    render(books) {
      this.container.innerHTML = '';
      books.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
  
        const title = document.createElement('h2');
        title.textContent = book.title;
        card.appendChild(title);
  
        const author = document.createElement('h3');
        author.textContent = book.author;
        card.appendChild(author);
  
        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);
  
        const readStatus = document.createElement('p');
        readStatus.textContent = book.read ? 'Read' : 'Not read yet';
        card.appendChild(readStatus);
  
        const readButton = document.createElement('button');
        readButton.textContent = book.read ? 'Mark as not read' : 'Mark as read';
        readButton.addEventListener('click', () => {
          library.toggleRead(index);
          this.render(library.books);
        });
        card.appendChild(readButton);
  
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
          library.removeBook(index);
          this.render(library.books);
        });
        card.appendChild(removeButton);
  
        this.container.appendChild(card);
      });
    }
  }
  
  const library = new Library();
  const ui = new UI('#card-container');
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('input[name="read"]:checked').value;

  
    const book = new Book(title, author, pages, read);
    library.addBook(book);
  
    modal.close()
  
    ui.render(library.books);
  });
  
  function showModal() {
    modal.show();
  }
  
  function closeModal() {
    modal.close();
    form.reset();
  }
  
  class Modal {
    constructor(modalSelector, formSelector) {
      this.modal = document.querySelector(modalSelector);
      this.form = document.querySelector(formSelector);
    }
  
    show() {
      this.modal.style.display = 'block';
    }
  
    close() {
      this.modal.style.display = 'none';
      this.form.reset();
    }
  
    addCloseListener() {
      window.addEventListener('click', (event) => {
        if (event.target == this.modal) {
          this.close();
        }
      });
    }
  }
  
  const modal = new Modal('#modal', 'form');
  modal.addCloseListener();
  


  