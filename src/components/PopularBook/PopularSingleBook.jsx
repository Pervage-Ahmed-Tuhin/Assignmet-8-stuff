

const PopularSingleBook = ({ book, index }) => {
    // console.log(book);

    const modalId = `modal-${index}`;
    const { title, author, price, comment, reviews, image } = book;
    return (
        <div className="flex flex-col ">
            <div className="card card-compact p-5 bg-base-100 shadow-xl work font-bold text-4xl flex-grow ">
                <figure className="pop"> <img className="w-[70%] h-[70%]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{comment}</p>
                    <p>
                        Author: {author}
                    </p>
                    <p className="space-x-5">
                        <span>Price: {price}$</span>
                        <span>Rating: {reviews[0].rating}*</span>
                    </p>

                    {/* <button onClick={() => clickHandler(title, price, reviews)} className="btn">Quick view</button> */}

                    {/* Start of modal */}

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-green-400 text-white work font-semibold" onClick={() => document.getElementById(modalId).showModal()}>Quick Pick</button>

                    <dialog id={modalId} className="modal">
                        <div className="modal-box play font-bold text-xl">
                            <figure className="pop p-5"><img className="w-[80%] rounded-lg" src={image} alt="" /></figure>
                            <div className="divider"></div>
                            <h3 className="font-bold text-lg">Title:{title}</h3>
                            <p className="py-4">Author:{author}</p>
                            <p className="py-4">Comment: {reviews[0].comment}</p>
                            <p className="py-4 space-x-4">Price: <span>{price}$</span>
                                <span>Reviewer Rating: {reviews[1].rating}*</span></p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                    {/* End of madal */}

                </div>
            </div>
        </div>
    );
};

export default PopularSingleBook;