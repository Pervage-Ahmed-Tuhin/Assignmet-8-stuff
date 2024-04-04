import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId, bookName, author, image, rating, tags, category } = book;

    
    return (

        // <div onClick= <Link to="/listedBooks"></Link> className='space-y-8 flex flex-col'>

        //     <div className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl p-6 flex-grow">
        //         <figure className='card-img p-5'><img className='w-[100%] border-none outline-none rounded-lg' src={image} alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h1 className='mt-8 work font-medium text-base text-[#23BE0A]'><span className='mr-4 pop p-2'>{tags[0]}</span> <span className='pop p-2'>{tags[1]}</span></h1>

        //             <h1 className='play font-bold text-2xl'>{bookName}</h1>
        //             <p className='work font-medium text-base text-[#131313CC]'>By: {author}</p>
        //             <div className="divider border-dotted"></div>
        //             <div className='flex justify-between w-full'>
        //                 <p className='work font-medium text-xl text-[#131313CC]'>{category}</p>
        //                 <p className='work font-medium text-xl text-[#131313CC] '>{rating}<i className="fa-regular fa-star text-xl ml-4"></i></p>
        //             </div>
        //         </div>
        //     </div>

        // </div>

        <Link to={`/${bookId}`} className='space-y-8 flex flex-col'>

            <div className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl p-6 flex-grow">
                <figure className='card-img p-5'><img className='w-[100%] border-none outline-none rounded-lg' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='mt-8 work font-medium text-base text-[#23BE0A]'><span className='mr-4 pop p-2'>{tags[0]}</span> <span className='pop p-2'>{tags[1]}</span></h1>

                    <h1 className='play font-bold text-2xl'>{bookName}</h1>
                    <p className='work font-medium text-base text-[#131313CC]'>By: {author}</p>
                    <div className="divider border-dotted"></div>
                    <div className='flex justify-between w-full'>
                        <p className='work font-medium text-xl text-[#131313CC]'>{category}</p>
                        <p className='work font-medium text-xl text-[#131313CC] '>{rating}<i className="fa-regular fa-star text-xl ml-4"></i></p>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default Book;