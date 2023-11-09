
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet";


const AddAJob = () => {
    const { user } = useContext(AuthContext);
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const jobBanner = form.jobBanner.value;
        const jobTitle = form.title.value;
        const category = form.category.value;
        const salaryRange = form.salaryRange.value;
        const postingDate = form.jobPostingDate.value;
        const description = form.description.value;
        const applicationDeadline = form.deadLine.value;
        const employer = form.employer.value;
        const email = user?.email;
        const applicantsCount = 0;

        const newJob = { jobBanner, jobTitle, category, salaryRange, postingDate, description, applicationDeadline, applicantsCount, email, employer }
        console.log(newJob);

        fetch('https://ass-11-server-side.vercel.app/allJobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: ' Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Got it!'
                    })
                }
            })
    }
    return (
        <div className="bg-[#cebfbf] p-5 md:p-28">
             <Helmet>
               
               <title>WorkFINDER | Add A Job</title>
               
           </Helmet>
            <h2 className="mt-20 md:mt-0 text-center bg-gradient-to-l from-[#362929] to-[#5a3535] mb-10  bg-clip-text text-transparent   text-4xl font-bold">Create A Job</h2>
            <form onSubmit={handleAddProduct}>
                {/* form name and quantity row */}
                <div className="md:flex mb-10 gap-10  ">
                    <div className="relative h-11 w-full  md:w-1/2 min-w-[200px] mb-10 md:m-0  ">

                        <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl "
                            required name="employer" defaultValue={user?.displayName}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px]  leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500  font-medium">
                            Employer Name
                        </label>
                    </div>


                    <div className="relative h-11 w-full  md:w-1/2 min-w-[200px] mb-10 md:m-0">

                        <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl"
                            required name="title"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Title
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-10 gap-10">



                    <div className="relative h-11 w-full  md:w-1/2 min-w-[200px] mb-10 md:m-0">

                        <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl"
                            required name="category"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Category
                        </label>
                    </div>

                    <div className="relative h-11 w-full  md:w-1/2 min-w-[200px] mb-10 md:m-0">

                        <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl"
                            required name="salaryRange"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Salary Range
                        </label>
                    </div>


                </div>
                {/* form category and details row */}
                <div className="md:flex mb-10 gap-10">

                    <div className="relative h-11 w-full  md:w-1/2 min-w-[200px] mb-10 md:m-0">

                        <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl"
                            required name="jobPostingDate" type="date"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Posting Date
                        </label>
                    </div>

                    <div className="relative h-11 w-full  md:w-1/2 min-w-[200px] mb-10 md:m-0  ">

                        <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl "
                            required name="deadLine" type="date"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ">
                            Deadline
                        </label>
                    </div>


                </div>

                <div className="relative h-11 w-full  mb-9">

                    <input
                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl"
                        required name="jobBanner"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Banner
                    </label>
                </div>



                {/* form Photo url row */}
                <div className="relative h-11 w-full">

                    <input
                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl"
                        required name="description"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ">
                        Description
                    </label>
                </div>





                <input type="submit" value="Add Coffee" className=" shadow-2xl form-control block w-full select-none mt-9 py-3 px-6 text-center align-middle font-sans text-xs font-bold    shadow-[#5a3535] transition-all hover:shadow-lg hover:shadow-[#5a3535] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn btn-primary bg-gradient-to-l from-[#362929] to-[#5a3535] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-lg text-white   normal-case " />

            </form>
        </div>
    );
};

export default AddAJob;