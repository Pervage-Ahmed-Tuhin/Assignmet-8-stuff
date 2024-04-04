
import BannerImage from '../../assets/To Kill a Mockingbird.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-center items-center w-full gap-20 p-3 lg:p-12 banner-mother-box mt-11 mb-[100px] lg:mb-24'>
            {/* This is the left side */}
            <div className='w-full lg:w-[45%]'>

                <h1 className="play font-bold text-5xl">Books to freshen <br /> up your bookshelf</h1>

                <Link to="/listedBooks">
                    <button className="btn bg-[#23BE0A] text-white mt-12 h-16 work font-bold text-xl">View The Lists</button>
                </Link>

            </div>
            {/* End of the left side */}

            {/* This is the right side */}
            <div className=' w-full lg:w-[45%]'>
                <img className='w-[95%] border-none outline-none rounded-lg' src={BannerImage} alt="" />
            </div>
            {/* End of the right side */}
        </div>
    );
};

export default Banner;