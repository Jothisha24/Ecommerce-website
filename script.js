const books = [
    { title: "Love in the Time of Cholera", author: "Gabriel Garcia Marquez", price: 10, cover: "./images/love.jpg", description: "A story of love and longing." },
    { title: "Peaceful Mind", author: "Thich Nhat Hanh", price: 12, cover: "./images/peace.jpg", description: "A guide to inner peace." },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15, cover: "./images/The Great Gatsby.jpg", description: "A tale of wealth and love." },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", price: 20, cover: "./images/Harry Potter and the Sorcerer's Stone.jpg", description: "The start of a magical journey." },
    { title: "War and Peace", author: "Leo Tolstoy", price: 18, cover: "./images/War and Peace.jpg", description: "A historical novel about the Napoleonic wars." },
    { title: "Comical Aliens", author: "John Smith", price: 14, cover: "./images/Comical Aliens.jpg", description: "A hilarious take on extraterrestrial life." },
    { title: "Pride and Prejudice", author: "Jane Austen", price: 10, cover: "./images/Pride and Prejudice.jpg", description: "A classic tale of love and society." },
    { title: "The Hobbit", author: "J.R.R. Tolkien", price: 15, cover: "./images/The Hobbit.jpg", description: "An adventure in a fantasy world." },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: 12, cover: "./images/To kill a Mocking bird.jpg", description: "A story of racial injustice." },
    { title: "The Alchemist", author: "Paulo Coelho", price: 14, cover: "./images/The Alchemist.jpg", description: "A journey to find one’s destiny." },
    { title: "1984", author: "George Orwell", price: 16, cover: "./images/1984.jpg", description: "A dystopian novel about totalitarianism." },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 13, cover: "./images/The Catcher in the Rye.jpg", description: "A story about teenage angst." },
    { title: "Brave New World", author: "Aldous Huxley", price: 15, cover: "./images/Brave New World.jpg", description: "A critique of modern society." },
    { title: "The Little Prince", author: "Antoine de Saint-Exupéry", price: 10, cover: "./images/The Little Prince.jpg", description: "A philosophical tale." },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis", price: 17, cover: "./images/The Chronicles of Narnia.jpg", description: "A fantasy adventure." },
    { title: "The Diary of a Young Girl", author: "Anne Frank", price: 12, cover: "./images/The Diary of a Young Girl.jpg", description: "A poignant memoir." },
];

let cart = [];

function displayBooks(filteredBooks = books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';  

    filteredBooks.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>$${book.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        bookList.appendChild(bookDiv);
    });
}

function addToCart(index) {
    const book = books[index];
    cart.push(book);
    updateCart();
}

// Update the cart and total price
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.title} - $${item.price} <button class="remove" onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(itemDiv);
        total += item.price;
    });

    document.getElementById('total-price').innerText = `Total: $${total}`;
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>'; 
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Search books based on user input
function searchBooks() {
    const searchQuery = document.getElementById('search-box').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery));
    displayBooks(filteredBooks);
}

// Checkout alert
document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Proceeding to checkout...');
});

// Display books when the page loads
displayBooks();
