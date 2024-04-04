

const AboutUs = () => {
    return (
        <div className="">

            <div className="bg-blue-400 h-[30vh] w-full mt-14 space-y-6">
                <h1 className="pt-10 text-4xl work font-bold text-center flex justify-center items-center">SaltyLibrary</h1>

                <h2 className="text-3xl lg:text-5xl text-white play font-bold text-center">Discover the Story Behind Slaty Library</h2>
            </div>

            <div className="divider"></div>

            <h1 className="pt-5 text-4xl work font-bold text-center flex justify-center items-center">Our Story</h1>

            <p className="play font-medium text-base text-[#13131399] text-center">Salty Library is more than just a collection of books; it's a sanctuary for bibliophiles, a haven where stories come to life, and where imagination knows no bounds. Our mission at Salty Library is to create an oasis for book lovers, offering a curated selection of literary treasures that span genres and eras. Whether you're seeking a gripping mystery, an epic fantasy, or a heartwarming tale, Salty Library has something to captivate every reader. Our diverse collection is carefully chosen to inspire, entertain, and provoke thought. With each turn of the page, we invite you to embark on a journey of discovery, where every book holds the promise of adventure and enlightenment. Welcome to Salty Library, where the sea of knowledge meets the shore of imagination.</p>


            <div className="divider"></div>

            <h1 className="pt-5 text-4xl work font-bold text-center flex justify-center items-center">About US</h1>

            <div className="divider"></div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mb-16 mt-5">
                {/* This is the left card  */}
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">

                        <div className="card-body">
                            <h2 className="card-title work font-bold text-2xl">Our Employees</h2>
                            <div className="divider"></div>
                            <ul className="play font-extrabold px-2 text-[#13131399] list-disc space-y-6">
                                <li>Emily Johnson - Library Manager</li>
                                <li>Michael Smith - Assistant Manager</li>
                                <li>Michael Smith - Assistant Manager</li>
                                <li> Michael Smith - Assistant Manager</li>
                                <li> Jennifer Garcia - Children's Librarian</li>
                                <li>Daniel Wilson - Teen Services Librarian</li>
                                <li> Jessica Lee - Cataloging Specialist</li>
                                <li>Matthew Clark - Circulation Supervisor</li>
                                <li> Emma Martinez - Outreach Coordinator</li>
                                <li> Andrew Taylor - IT Specialist</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* end of the left card */}

                {/* This is the right card */}

                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">

                        <div className="card-body">
                            <h2 className="card-title work font-bold text-2xl">Our Branches</h2>
                            <div className="divider"></div>
                            <ul className="play font-extrabold px-2 text-[#13131399] list-disc space-y-4">
                                <li>Salty Library - Main Branch: Located at 123 Ocean Avenue, Seaside Town, Coastal County, USA</li>
                                <li>Salty Library - Downtown Branch: Located at 456 Harbor Street, City Center, Bayview County, USA</li>
                                <li>Salty Library - Westside Branch: Located at 789 Sunset Boulevard, Cliffside Suburb, Sunset County, USA</li>
                                <li> Salty Library - Eastside Branch: Located at 101 Sunrise Avenue, Hilltop District, Sunrise County, USA</li>
                                <li> Salty Library - Northside Branch: Located at 234 Pine Street, Lakeside Neighborhood, Lakeshore County, USA</li>
                                <li>Salty Library - Southside Branch: Located at 567 Beach Road, Rivertown Area, Riverfront County, USA</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                {/* End of the right card */}

            </div>
        </div>

    );
};

export default AboutUs;