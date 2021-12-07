export function renderBooks(books) {
    // Create an element(s)
    const bookDiv = document.createElement('div');
    const bookName = document.createElement('p');
    const bookISBN = document.createElement('p');
    const bookAuthor = document.createElement('p');
    // Set element attributes
    
    bookName.textContent = books.title;
    bookISBN.textContent = books.bookISBN;
    bookAuthor.textContent = `${books.author.firstName} ${books.author.middleName} ${books.author.lastName}`;
    
    bookDiv.classList.add('book-class');
    bookDiv.append(bookName, bookISBN, bookAuthor);
    // Return the element
    return bookDiv;
}