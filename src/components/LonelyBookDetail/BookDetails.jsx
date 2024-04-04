import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBooks, saveWishlistBooks } from "../../utility/localStorage";


const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const BookId = parseInt(id);

    const [read, setRead] = useState(true);
    const [wishlist, setWishlist] = useState(true);


    const book = books.find(book => book.bookId === BookId);

    console.log(book, BookId);

    const handleRead = () => {

        if (read) {
            saveBooks(BookId);
            toast("You have successfully read this book");
            setRead(!read);
            setWishlist(false);
        }
        else {
            
            toast.error("This Book Already Exists")
        }

    }

    const handleWishlist = () => {
        if (wishlist) {
            saveWishlistBooks(BookId);
            toast("This book has been added to the wishlist");
            setWishlist(!wishlist);
            // setRead(false);
        }
        else{
            toast.error("This books Already Exists");
        }
    }
    return (
        <div className="max-w-6xl mx-auto mt-14 flex flex-col lg:flex-row justify-between gap-12">
            <div className="details-book-box flex justify-center items-center px-4 py-4">

                <img className="rounded-lg w-[100%]" src={book.image} alt="this is an image of a book" />

            </div>

            {/* This is the right sections staring */}
            <div className="space-y-4 p-5">
                <div className="space-y-4">
                    <h1 className="play font-bold text-5xl">{book.bookName}</h1>
                    <p className="work font-medium text-xl text-[#131313CC]">By: {book.author}</p>
                </div>
                <div className="divider"></div>
                <p className="work font-medium text-xl text-[#131313CC]">{book.category}</p>
                <div className="divider"></div>

                <p><span className="work font-bold text-base">Review:</span> <span className="work font-normal text-base text-[#131313B3]">{book.review}</span></p>

                <p className="space-x-8"><span className="work font-bold text-base">Tags : </span><span className="text-[#23BE0A] rounded-[30px] bg-[#23BE0A0D]">#{book.tags[0]}</span> <span className="text-[#23BE0A]  rounded-[30px] bg-[#23BE0A0D]">#{book.tags[1]}</span></p>

                <div className="divider"></div>

                <div className="space-y-5">
                    <p><span className="work font-normal text-base text-[#131313B3]">Number of Pages:</span> <span className="work font-semibold text-base"> {book.totalPages}</span></p>
                    <p> <span className="work font-normal text-base text-[#131313B3]">Publisher:</span> <span className="work font-semibold text-base">{book.publisher}</span></p>
                    <p> <span className="work font-normal text-base text-[#131313B3]">Year Of Publishing:</span> <span className="work font-semibold text-base">{book.yearOfPublishing}</span></p>
                    <p><span className="work font-normal text-base text-[#131313B3]">Rating:</span> <span className="work font-semibold text-base">{book.rating}</span></p>

                </div>

                <div className="flex flex-col lg:flex-row lg:gap-8 mb-[100px]">
                    <button onClick={handleRead} className="btn work font-semibold text-base rounded-2">Read</button>
                    <button onClick={handleWishlist} className="btn text-white bg-[#50B1C9] rounded-2">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default BookDetails;