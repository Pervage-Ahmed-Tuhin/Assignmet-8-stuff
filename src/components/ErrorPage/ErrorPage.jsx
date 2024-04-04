import { Link } from "react-router-dom";

import cry from '../../assets/cry.jpg'

const ErrorPage = () => {
    return (
        <div className="max-w-6xl mx-auto">



            <div className="space-y-5 flex flex-col justify-center items-center mt-[200px] lg:mt-[200px]">
                <img className="rounded-lg " src={cry} alt="" />
                <h1 className="text-6xl text-green-500">Oops!!Page Not Found!</h1>

                <Link to="/"> <button className="btn">Go Back To Home</button></Link>
            </div>

        </div>
    );
};

export default ErrorPage;