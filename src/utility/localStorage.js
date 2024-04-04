
// This is for read book section
const getStoredBooks = () => {

    const storedBook = localStorage.getItem('stored-read-books');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    else {
        return [];
    }
}

const saveBooks = id => {

    const StoredBooks = getStoredBooks();

    const exist = StoredBooks.find(bookId => bookId === id);
    if (!exist) {
        StoredBooks.push(id);
        localStorage.setItem('stored-read-books', JSON.stringify(StoredBooks));
    }

}

// This is for wishlist

const getStoredWishlistBooks = () => {

    const storedWishlistBook = localStorage.getItem('stored-wishlist-books');
    if (storedWishlistBook) {
        return JSON.parse(storedWishlistBook);
    }
    else {
        return [];
    }
}





const saveWishlistBooks = id => {

    const StoredWishlistBooks = getStoredWishlistBooks();

    const exist = StoredWishlistBooks.find(bookId => bookId === id);
    if (!exist) {
        StoredWishlistBooks.push(id);
        localStorage.setItem('stored-wishlist-books', JSON.stringify(StoredWishlistBooks));
    }

}

export { saveBooks, getStoredBooks,saveWishlistBooks,getStoredWishlistBooks };