


const Banner = () => {
  
    return (
        <div className="hero w-full h-full min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/wBzS2Nv/OIG-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-center text-neutral-content">
                <div className="max-w-3xl space-y-8">
                    <h1 className="mb-5 text-4xl md:text-5xl font-bold mx-4 ">Your Gateway to Employment Opportunities</h1>
                    <p className="mb-5 mx-4">Your Career Journey Starts Here. Explore Diverse Opportunities for On-site, Remote, or Hybrid Jobs. Join Us to Find Your Perfect Career Path.</p>
                    <div className="flex items-center justify-center mx-4 my-20">
                        <input type="text" placeholder="Search here" className="input  text-black input-bordered  w-full max-w-sm rounded-l-lg rounded-r-none" />
                    <button className="form-control block w-1/4 select-none interactable  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn  bg-gradient-to-l from-[#5a3535] to-[#362929] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-l-none  text-white   normal-case rounded-r-lg">Search</button>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;