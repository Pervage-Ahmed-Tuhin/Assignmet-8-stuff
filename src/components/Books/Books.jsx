
import { useEffect, useState } from 'react';
import image from '../../assets/To Kill a Mockingbird.png'
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    console.log(books);
    return (
        <div>
            <h1 className="paly font-bold text-4xl text-center mb-9">Books</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mb-[200px]'>
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;