import { useContext, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
// import { AuthContext } from "../providers/AuthProvider";





const SingleJobDetails = () => {
    const { user } = useContext(AuthContext);
    const [singleCard, setSingleCard] = useState({});

    const jobCards = useLoaderData();
    const form = useRef();

    useEffect(() => {

        setSingleCard(jobCards);

    }, [jobCards]);


    const checkDate = () => {
        const dateToCompare = new Date(singleCard.applicationDeadline);

        const date = new Date();
        const displayCurrentDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();

        console.log(displayCurrentDate);
        if (dateToCompare > date) {
            console.log("The date  is in the future.", singleCard.applicationDeadline);
        } else if (dateToCompare < date) {
            console.log("The date  is in the past.", singleCard.applicationDeadline);

            Swal.fire({
                title: 'Opps!',
                text: 'Deadline is over',
                icon: 'error',
                confirmButtonText: 'sorry...',
            });

            // Disable the submit button
            const submitButton = document.getElementById('submitButton');
            submitButton.disabled = true;

            return;
        } else {
            console.log("The date  is today.");
        }
        if (singleCard?.email === user?.email) {
            const submitButton = document.getElementById('apply');
            submitButton.disabled = true;

            return console.log('sameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
        }



    };
    console.log(singleCard.applicationDeadline);

    checkDate()
    const handleInput = (event) => {

        event.preventDefault();
        console.log('clicked');

        const form = event.target;

        const resumeLink = form.resumeLink.value;
        const name = form.name.value;
        const email = form.email.value;
       


        handleApplyJob(resumeLink, name, email)
    }

    const handleApplyJob = (resumeLink, name, email) => {


        const appliedJob = {
            id: singleCard._id,
            resumeLink: resumeLink,
            name: name,
            email: email,
            applicantsCount: singleCard.applicantsCount,
            applicationDeadline: singleCard.applicationDeadline,
            category: singleCard.category,
            description: singleCard.description,
            employer: singleCard.employer,
            jobBanner: singleCard.jobBanner,
            jobTitle: singleCard.jobTitle,
            postingDate: singleCard.postingDate,
            salaryRange: singleCard.salaryRange,

        }
        console.log(appliedJob);

        fetch(`https://ass-11-server-side.vercel.app/appliedJobs/${singleCard._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appliedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message === 'Application successful') {
                    const updatedData = {
                        applicantsCount: singleCard.applicantsCount + 1,
                        applicationDeadline: singleCard.applicationDeadline,
                        category: singleCard.category,
                        description: singleCard.description,
                        employer: singleCard.employer,
                        jobBanner: singleCard.jobBanner,
                        jobTitle: singleCard.jobTitle,
                        postingDate: singleCard.postingDate,
                        salaryRange: singleCard.salaryRange,
                    }
                    setSingleCard(updatedData)

                    document.getElementById('my_modal_2').close();
                    Swal.fire({
                        title: 'Success!',
                        text: '  Successfully',
                        icon: 'success',
                        confirmButtonText: 'okay',

                    })
                    window.location.reload()

                }
            })

    }

    return (
        <div className="py-32 mx-3 md:mx-12 lg:mx-28">
            <Helmet>

                <title>WorkFINDER | Job Details</title>

            </Helmet>
            <div className='flex justify-between gap-2 px-3 mb-3  flex-wrap items-center relative space-y-2 text-start'>

                <div>
                    <span className='text-3xl text-[#5a3535] font-bold'>{singleCard?.jobTitle}</span>
                </div>
                <div>
                    <span className='text-xl text-[#5a3535] font-medium'>  {singleCard?.employer}</span>
                </div>
            </div>
            <div className='border-2 border-[#ce8d8d] flex justify-between flex-wrap md:flex-nowrap rounded-lg  gap-8 p-3 md:p-10    space-y-2 shadow-2xl '>
                <div >

                    <img className=" h-full rounded-lg" src={singleCard?.jobBanner} />
                </div>

                <div className='flex justify-between gap-2 px-3  flex-wrap items-center relative '>


                    <div>
                        <span className='text-[#5a3535]  font-medium'> Posting Date : </span>{singleCard?.postingDate}
                    </div>
                    <div>
                        <span className='text-[#5a3535] font-medium'> Deadline : </span> {singleCard?.applicationDeadline}
                    </div>
                    <div>
                        <span className='text-[#5a3535] font-medium'> Salary Range :  </span>{singleCard?.salaryRange}
                    </div>
                    <div>
                        <span className='text-[#5a3535] font-medium'> Type :  </span>{singleCard?.category}
                    </div>
                    <div>
                        <span className='text-[#5a3535] font-medium'> Info : </span>  {singleCard?.description}
                    </div>
                    <div>
                        <span className='text-[#5a3535] font-medium'> Salary Range :  </span>{singleCard?.salaryRange}
                    </div>
                    <div>
                        <span className='text-[#5a3535] font-medium'> Applicants :  </span>{singleCard?.applicantsCount}
                    </div>
                    <div  >


                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button
                            className='form-control block w-full select-none py-3 px-6 text-center align-middle font-sans text-xs font-bold shadow-xl transition-all hover:shadow-2xl active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn bg-white bg-gradient-to-l hover:from-[#ff6d2a] hover:to-[#e64146] border-2 border-[#362929] rounded-full text-[#362929] normal-case interactable'
                            onClick={() => document.getElementById('my_modal_2').showModal()} id="apply"
                        >
                            Apply now
                        </button>

                        <dialog id="my_modal_2" className="modal ">
                            <div className="modal-box  p-10  bg-[#cebfbf] ">
                                <h1 className="mt-20 md:mt-0 text-center bg-gradient-to-l from-[#362929] to-[#5a3535] mb-10  bg-clip-text text-transparent   text-4xl font-bold">Application From</h1>
                                {/* <form onSubmit={handleInput} className="space-y-5">

                                </form> */}


                                <form ref={form} onSubmit={handleInput} className="space-y-5">

                                    <div className="relative h-11 w-full">

                                        <input
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl"
                                            required name="name" defaultValue={user?.displayName}
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ">
                                            Name
                                        </label>
                                    </div>
                                    <div className="relative h-11 w-full">

                                        <input
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl"
                                            required name="email" defaultValue={user?.email}
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ">
                                            Email
                                        </label>
                                    </div>
                                    <div className="relative h-11 w-full">

                                        <input
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl"
                                            required name="resumeLink"
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ">
                                            Resume Link
                                        </label>
                                    </div>
                                    <input id="submitButton" type="submit" value="Add Coffee" className='form-control block w-full select-none py-3 px-6 text-center align-middle font-sans text-xs font-bold shadow-xl transition-all hover:shadow-2xl active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn bg-gradient-to-r from-[#362929] to-[#5a3535]  hover:from-[#ff6d2a] hover:to-[#e64146]  rounded-lg text-white normal-case interactable' />


                                </form>


                                <form method="dialog">

                                    {/* Add an onClick event to close the modal */}
                                    <button
                                        onClick={() => document.getElementById('my_modal_2').close()}
                                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 font-black   shadow-xl  bg-gradient-to-l hover:from-[#ff6d2a] hover:to-[#e64146]  rounded-full border border-[#969595] text-black normal-case interactable"
                                    >
                                        ✕
                                    </button>
                                </form>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SingleJobDetails;