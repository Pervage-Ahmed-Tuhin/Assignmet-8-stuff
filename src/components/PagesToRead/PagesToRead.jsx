import React, { PureComponent, useState, useEffect } from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getStoredBooks} from '../../utility/localStorage';
import { useLoaderData } from 'react-router-dom';


const PagesToRead = () => {

    const bookList = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);


    useEffect(() => {
        const storedReadBooks=getStoredBooks();
        if(storedReadBooks.length>0)
        {
            const booksData = storedReadBooks.map(id=>{
                const book = bookList.find(book=>book.bookId === id);
                return{name:book.bookName,totalPages:book.totalPages};
            });
            setReadBooks(booksData);
        }
    }, [bookList])

    return (
        <div className="max-w-6xl mx-auto h-[50vh] mt-[100px]">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={readBooks}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalPages" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};


export default PagesToRead;