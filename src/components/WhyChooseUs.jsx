import { Link } from "react-router-dom";

const WhyChooseUs = () => {
    return (
        <div className="mx-6 md:mx-14 lg:mx-28 space-y-96 my-80">
            {/* job seekers */}
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between">
                <div className="max-w-md ml-0 lg:ml-20 space-y-8">
                    <p className="font-medium text-gray-500 text-lg">GOT TALENT?</p>
                    <h1 className="font-semibold text-5xl">
                        Why job seekers love us
                    </h1>
                    <div className='flex items-center space-x-4'>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287fab77e63b3_Star.svg" alt="" />
                        <p className="text-black text-base">
                            Unique jobs at startups and tech companies you can't find anywhere else
                        </p>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128775587e63ec_Click.svg" alt="" />
                        <p className="text-black text-base">
                            Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.

                        </p>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287515d7e63b2_List.svg" alt="" />
                        <p className="text-black text-base">
                            Everything you need to know to job search - including seeing salary and stock options upfront when looking

                        </p>
                    </div>
                   <div className='flex items-center space-x-4'>
                   <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287b6b07e63ed_Connect.svg" alt="" />
                    <p className="text-black text-base">
                        Connect directly with founders at top startups - no third party recruiters allowed

                    </p>

                   </div>
                <div className="flex flex-col md:flex-row justify-between gap-3  items-center">
             
                <Link className="form-control block w-3/6 select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn  bg-white bg-gradient-to-l hover:from-[#ff6d2a] hover:to-[#e64146] border-2 border-[#362929] rounded-full text-[#362929]     normal-case">Learn More </Link>
                
                     <Link to={'/registration'} 
                     className="form-control block w-3/6 select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn  bg-gradient-to-l from-[#5a3535] to-[#362929] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-full text-white   normal-case">
                        Sign up now
                     </Link>

                </div>
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/OIG.zEbRn6KgACZdDQEcc1iy?pid=ImgGn&w=1024&h=1024&rs=1" alt="" />
                </div>

            </div>
            {/* recruiters  */}


            <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
                <div className="max-w-md mr-0 lg:mr-20 space-y-8">
                    <p className="font-medium text-gray-500 text-lg">NEED TALENT?</p>
                    <h1 className="font-semibold text-5xl">
                    Why recruiters love us
                    </h1>
                    <div className='flex items-center space-x-4'>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128716b37e63bb_Team.svg" alt="" />
                        <p className="text-black text-base">
                        8 million responsive and startup-ready candidates, with all the information you need to vet them
                        </p>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128708fd7e63b6_Settings.svg" alt="" />
                        <p className="text-black text-base">
                        Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free

                        </p>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287316a7e63c1_Template.svg" alt="" />
                        <p className="text-black text-base">
                        A free applicant tracking system, or free integration with any ATS you may already use

                        </p>
                    </div>
                   <div >
                   
                    <p className="text-black text-base">
                    Plus, we can do the vetting for you! With Curated, we review the world's top tech talent and highlight candidates directly to you 2x a week.


                    </p>

                   </div>
                <div className="flex flex-col md:flex-row justify-between gap-3  items-center">
                <Link className="form-control block w-3/6 select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn  bg-white bg-gradient-to-l hover:from-[#ff6d2a] hover:to-[#e64146] border-2 border-[#362929] rounded-full text-[#362929]     normal-case">Learn More </Link>
                
                <Link to={'/registration'} 
                className="form-control block w-3/6 select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn  bg-gradient-to-l from-[#5a3535] to-[#362929] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-full text-white   normal-case">
                   Sign up now
                </Link>
                </div>
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/OIG.GukEz_ScUlq7RrkosWfi?pid=ImgGn" alt="" />
                </div>

            </div>
           
        </div>
    );
};

export default WhyChooseUs;