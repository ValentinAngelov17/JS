const firebaseUrl = 'https://fir-playground-7e3a3-default-rtdb.europe-west1.firebasedatabase.app/books';

// Load all books
document.getElementById('loadBooks').addEventListener('click', async () => {
    const response = await fetch(`${firebaseUrl}.json`);
    const data = await response.json();
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    if (!data) {
        tbody.innerHTML = '<tr><td colspan="4">No books available</td></tr>';
        return;
    }

    for (let id in data) {
        const book = data[id];
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
                <button onclick="editBook('${id}', '${book.title}', '${book.author}', '${book.isbn}')">Edit</button>
                <button onclick="deleteBook('${id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    }
});

// Create a new book
document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (!title || !author || !isbn) {
        alert('Please fill out all fields!');
        return;
    }

    const newBook = { title, author, isbn };
    await fetch(`${firebaseUrl}.json`, {
        method: 'POST',
        body: JSON.stringify(newBook),
        headers: { 'Content-Type': 'application/json' },
    });

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    alert('Book added successfully!');
    document.getElementById('loadBooks').click();
});

// Edit a book
async function editBook(id, title, author, isbn) {
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    document.getElementById('isbn').value = isbn;

    document.getElementById('submit').textContent = 'Update';
    document.getElementById('submit').onclick = async (e) => {
        e.preventDefault();

        const updatedTitle = document.getElementById('title').value;
        const updatedAuthor = document.getElementById('author').value;
        const updatedIsbn = document.getElementById('isbn').value;

        if (!updatedTitle || !updatedAuthor || !updatedIsbn) {
            alert('Please fill out all fields!');
            return;
        }

        await fetch(`${firebaseUrl}/${id}.json`, {
            method: 'PUT',
            body: JSON.stringify({ title: updatedTitle, author: updatedAuthor, isbn: updatedIsbn }),
            headers: { 'Content-Type': 'application/json' },
        });

        alert('Book updated successfully!');
        document.getElementById('submit').textContent = 'Submit';
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
        document.getElementById('submit').onclick = (e) => {
            e.preventDefault();
            document.getElementById('submit').click();
        };

        document.getElementById('loadBooks').click();
    };
}

// Delete a book
async function deleteBook(id) {
    if (confirm('Are you sure you want to delete this book?')) {
        await fetch(`${firebaseUrl}/${id}.json`, {
            method: 'DELETE',
        });
        alert('Book deleted successfully!');
        document.getElementById('loadBooks').click();
    }
}
