
import { Link, useLoaderData } from 'react-router-dom';
import arrow from '../../assets/Vector.png'
import { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks, getStoredWishlistBooks } from '../../utility/localStorage';
// import ListedBooksRead from '../ListedBooksIndividul/ListedBooksRead';

import img from '../../assets/Vector 2.png'

import im2 from '../../assets/Vector 3.png'

import img3 from '../../assets/Vector 4.png'

const ListedBooks = () => {

    const bookList = useLoaderData();
    console.log(bookList)

    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    const [displayBooks2, setDisplayBooks2] = useState([]);

    console.log(wishlistBooks);

    useEffect(() => {
        const storedReadBooks = getStoredBooks();

        if (storedReadBooks.length > 0) {


            const readBooks = [];
            for (const id of storedReadBooks) {
                const book = bookList.find(book => book.bookId === id);
                if (book) {
                    readBooks.push(book)
                }
            }
            setReadBooks(readBooks);
            setDisplayBooks(readBooks);

        }
    }, [bookList])

    useEffect(() => {

        const storedWishlistBooks = getStoredWishlistBooks();

        if (storedWishlistBooks.length > 0) {
            const wishlistBooks = [];
            for (const id of storedWishlistBooks) {
                const book2 = bookList.find(book2 => book2.bookId === id);
                if (book2) {
                    wishlistBooks.push(book2);
                }
            }
            setWishlistBooks(wishlistBooks);
            setDisplayBooks2(wishlistBooks);
        }
    }, [bookList])
    console.log(typeof readBooks);


    const sortByRating = () => {
        const sortedBooks = [...displayBooks].sort((a, b) => a.rating - b.rating);
        const sortedBooks2 = [...displayBooks2].sort((a, b) => a.rating - b.rating);
        setDisplayBooks(sortedBooks);
        setDisplayBooks2(sortedBooks2);
    };

    const sortByNumberOfPages = () => {

        const sortedBooks = [...displayBooks].sort((a, b) => a.totalPages - b.totalPages)
        const sortedBooks2 = [...displayBooks2].sort((a, b) => a.totalPages - b.totalPages)
        setDisplayBooks(sortedBooks);
        setDisplayBooks2(sortedBooks2);
    }


    const sortByPublishYear = () => {
        const sortedBooks = [...displayBooks].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        const sortedBooks2 = [...displayBooks2].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        setDisplayBooks(sortedBooks);
        setDisplayBooks2(sortedBooks2);
    }

    return (
        <div className="max-w-6xl mx-auto mt-[50px] mb-[200px]">

            <div className="listed-books-header-box">
                <h1 className="text-center work font-bold text-3xl p-7">Books</h1>
            </div>

            <div className="flex justify-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white w-32 text-lg work font-semibold mt-10 mb-14">Sort By<img src={arrow} alt="" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={sortByRating}><a>Rating</a></li>
                        <li onClick={sortByNumberOfPages}><a>Number of pages</a></li>
                        <li onClick={sortByPublishYear}><a>Published year</a></li>
                    </ul>
                </details>
            </div>

            {/* This is the react tab section */}
            <div>

                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {

                            displayBooks.map(book => <div className='flex flex-col lg:flex-row mb-8 lg:h-[555px] gap-5 ' key={book.bookId}>

                                <div className='w-full lg:w-[50%] pop flex justify-center items-center'>
                                    <img className='w-[75%] h-[70%]' src={book.image} alt="" />
                                </div>
                                <div className='w-full lg:w-[45%] space-y-3 lg:space-y-12 items-center p-5'>
                                    <h2 className="card-title play font-bold text-4xl">{book.bookName}</h2>
                                    <p className='work font-medium text-base text-[#131313CC]'>By: {book.author}</p>
                                    <p className='space-x-2 flex flex-wrap items-center'><span className='work font-bold text-base text-[#131313]'>Tags:</span> <span className='work font-medium text-base text-[#23BE0A] bg-[#23BE0A0D] rounded-[30px] p-4' >#{book.tags[0]}</span> <span className='work font-medium text-base text-[#23BE0A] bg-[#23BE0A0D] rounded-[30px] p-4'>#{book.tags[1]}</span> <span className='flex items-center gap-5 work font-medium text-base text-[#23BE0A] bg-[#23BE0A0D] rounded-[30px] p-4 mt-4'>

                                        <img src={img} alt="" />

                                        year Of Publishing:{book.yearOfPublishing}</span></p>
                                    <p className='work font-normal text-base text-[#13131399] flex items-center gap-4'>  <img src={im2} alt="" /> Publisher : {book.publisher}  <img src={img3} alt="" /> page: {book.totalPages}</p>

                                    <button className='btn mr-2 text-[#328EFF] bg-[#328EFF26] rounded-[30px] work font-normal text-lg '>Category:{book.category}</button>
                                    <button className='btn mr-2 text-[#FFAC33] bg-[#FFAC3326] rounded-[30px] work font-normal text-lg '>Rating: {book.rating}</button>
                                    <Link to={`/${book.bookId}`}><button className='btn text-white bg-[#23BE0A] rounded-[30px] work font-normal text-lg mt-3'>View Details</button></Link>
                                </div>


                            </div>)

                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            displayBooks2.map(book => <div className='flex flex-col lg:flex-row mb-8 lg:h-[555px] gap-5 ' key={book.bookId}>

                                <div className='w-full lg:w-[50%] pop flex justify-center items-center'>
                                    <img className='w-[75%] h-[70%]' src={book.image} alt="" />
                                </div>
                                <div className='w-full lg:w-[45%] space-y-3 lg:space-y-12 items-center p-5'>
                                    <h2 className="card-title play font-bold text-4xl">{book.bookName}</h2>
                                    <p className='work font-medium text-base text-[#131313CC]'>By: {book.author}</p>
                                    <p className='space-x-2 flex flex-wrap items-center'><span className='work font-bold text-base text-[#131313]'>Tags:</span> <span className='work font-medium text-base text-[#23BE0A] bg-[#23BE0A0D] rounded-[30px] p-4' >#{book.tags[0]}</span> <span className='work font-medium text-base text-[#23BE0A] bg-[#23BE0A0D] rounded-[30px] p-4'>#{book.tags[1]}</span> <span className='flex items-center gap-5 work font-medium text-base text-[#23BE0A] bg-[#23BE0A0D] rounded-[30px] p-4 mt-4'>

                                        <img src={img} alt="" />

                                        year Of Publishing:{book.yearOfPublishing}</span></p>
                                    <p className='work font-normal text-base text-[#13131399] flex items-center gap-4'>  <img src={im2} alt="" /> Publisher : {book.publisher}  <img src={img3} alt="" /> page: {book.totalPages}</p>

                                    <button className='btn mr-2 text-[#328EFF] bg-[#328EFF26] rounded-[30px] work font-normal text-lg '>Category:{book.category}</button>
                                    <button className='btn mr-2 text-[#FFAC33] bg-[#FFAC3326] rounded-[30px] work font-normal text-lg '>Rating: {book.rating}</button>
                                    <Link to={`/${book.bookId}`}><button className='btn text-white bg-[#23BE0A] rounded-[30px] work font-normal text-lg '>View Details</button></Link>
                                </div>


                            </div>)
                        }

                    </TabPanel>
                </Tabs>

            </div>

        </div>
    );
};

export default ListedBooks;