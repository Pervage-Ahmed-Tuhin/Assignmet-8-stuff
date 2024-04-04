import { useLoaderData } from "react-router-dom";
import PopularSingleBook from "../PopularBook/PopularSingleBook";


const Popular = () => {

    const popularBooks = useLoaderData();

    console.log(typeof popularBooks);


    console.log(popularBooks);

    // const clickHandler = (title, price, reviews) => {


    // }

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="work font-bold text-3xl text-center mt-10">Popular Collection</h1>
            <div className="divider"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    popularBooks.books.map((book, index) => <PopularSingleBook index={index} key={index} book={book}></PopularSingleBook>)
                }
            </div>
        </div>
    );
};

export default Popular;