import { BiLinkExternal } from "react-icons/bi";

import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import JobCard from "../components/jobCategorySection/JobCard";
import { Helmet } from "react-helmet";


const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const [myJobsInfo, setMyJobs] = useState([])
    const [jobsInCategory, setJobsInCategory] = useState([]);
    const [input, setInput] = useState("");
    const [filteredJobs, setFilteredJobs] = useState(myJobsInfo)


    const [activeTab, setActiveTab] = useState(0);
    const url = `https://ass-11-server-side.vercel.app/appliedJobs?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyJobs(data),
       )
    }, [url])
   

// tab section --------------------------------------------------------------------------------------------------------
useEffect(()=>{
    setJobsInCategory(myJobsInfo),
    setFilteredJobs(myJobsInfo)
},[myJobsInfo])
  
    ; // Initialize with the original data

    const handleTabSelect = (index) => {
        setActiveTab(index);
    }

   
        
       ; // Initialize with the original data
  

    const remoteJobs = filteredJobs.filter((job) => job.category === 'Remote');
    const onSiteJobs = filteredJobs.filter((job) => job.category === 'On Site');
    const hybridJobs = filteredJobs.filter((job) => job.category === 'Hybrid');
    const partTimeJobs = filteredJobs.filter((job) => job.category === 'Part Time');

    const handleChange = (value) => {
        setInput(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        filterJobs(input);
    }

    // Highlighted the corrected part of the code
    const filterJobs = (value) => {
        const result = myJobsInfo.filter((job) => // Use 'data' instead of 'jobsInCategory'
            value && job.jobTitle.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredJobs(result);
    }


    const [loader, setLoader] = useState(false);

    const downloadPDF = () =>{
      const capture = document.querySelector('.actual-receipt');
      setLoader(true);
      html2canvas(capture).then((canvas)=>{
        const imgData = canvas.toDataURL('img/png');
        const doc = new jsPDF('p', 'mm', 'a4');
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
        setLoader(false);
        doc.save('receipt.pdf');
      })
    }

    return (
       

        <div className="py-36 w-4/5 mx-auto">
             <Helmet>
               
               <title>WorkFINDER | Applied Jobs</title>
               
           </Helmet>
        <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
            <h1 className="text-center text-3xl font-bold">Applied Jobs</h1>
            <div className="flex  mx-4 my-20">
                <form onSubmit={handleSubmit} className="flex w-full items-center justify-center">
                    <input
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                        type="text"
                        placeholder="Search here...."
                        className=" input text-black input-bordered  w-full max-w-sm rounded-l-lg rounded-r-none"
                    />
                    <input
                        type="submit"
                        className="form-control block w-1/4 select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn  bg-gradient-to-l from-[#5a3535] to-[#362929] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-l-none  text-white   normal-case rounded-r-lg"
                        value="Search"
                    />
                </form>
            </div>

            <div className='flex justify-center'>
                <TabList className={`flex flex-wrap gap-20 border-2 rounded-lg px-5 py-2 `}>
                    <Tab className={`${activeTab === 0 ? 'text-red-500 border-red-500 font-medium underline   ' : ''}`}>All Jobs</Tab>
                    <Tab className={`${activeTab === 1 ? 'text-red-500 border-red-500 font-medium underline  ' : ''}`}>Remote</Tab>
                    <Tab className={`${activeTab === 2 ? 'text-red-500 border-red-500  font-medium underline ' : ''}`}>On Site</Tab>
                    <Tab className={`${activeTab === 3 ? 'text-red-500 border-red-500 font-medium underline  ' : ''}`}>Hybrid</Tab>
                    <Tab className={`${activeTab === 4 ? 'text-red-500 border-red-500 font-medium underline ' : ''}`}>Part Time</Tab>
                </TabList>
            </div>


            <div className='max-h-screen overflow-auto'>
                <TabPanel>
                    {filteredJobs.map((job) => (
                        <div key={job._id} className='mb-10 border p-3 md:p-10 space-y-2 shadow-lg'>
            <div className='flex justify-between flex-wrap items-center space-y-2'>
                <div>
                    <span className='text-2xl text-[#5a3535] font-semibold'>{job.jobTitle}</span>
                </div>
                <div>
                    {job.employer}
                </div>
            </div>
            <div className='flex justify-between flex-wrap items-center space-y-2 '>
                <div>
                   <span className='text-[#5a3535]'> Posting Date : </span>{job.postingDate}
                </div>
                <div>
                <span className='text-[#5a3535]'> Deadline : </span> {job.applicationDeadline}
                </div>
            </div>

            <div className='flex justify-between flex-wrap items-center space-y-2'>
            <div>
                Salary Range : {job.salaryRange} 
            </div>
            <div>
                Applicants : {job.applicantsCount} 
            </div>
          
            </div>
            
        </div>
                    ))}
                </TabPanel>

                <TabPanel>
                    {remoteJobs.map((job) => (
                        <div key={job._id} className='mb-10 border p-3 md:p-10 space-y-2 shadow-lg'>
            <div className='flex justify-between flex-wrap items-center space-y-2'>
                <div>
                    <span className='text-2xl text-[#5a3535] font-semibold'>{job.jobTitle}</span>
                </div>
                <div>
                    {job.employer}
                </div>
            </div>
            <div className='flex justify-between flex-wrap items-center space-y-2 '>
                <div>
                   <span className='text-[#5a3535]'> Posting Date : </span>{job.postingDate}
                </div>
                <div>
                <span className='text-[#5a3535]'> Deadline : </span> {job.applicationDeadline}
                </div>
            </div>

            <div className='flex justify-between flex-wrap items-center space-y-2'>
            <div>
                Salary Range : {job.salaryRange} 
            </div>
            <div>
                Applicants : {job.applicantsCount} 
            </div>
          
            </div>
            
        </div>))}
                </TabPanel>

                <TabPanel>
                    {onSiteJobs.map((job) => (
                        <div key={job._id} className='mb-10 border p-3 md:p-10 space-y-2 shadow-lg'>
            <div className='flex justify-between flex-wrap items-center space-y-2'>
                <div>
                    <span className='text-2xl text-[#5a3535] font-semibold'>{job.jobTitle}</span>
                </div>
                <div>
                    {job.employer}
                </div>
            </div>
            <div className='flex justify-between flex-wrap items-center space-y-2 '>
                <div>
                   <span className='text-[#5a3535]'> Posting Date : </span>{job.postingDate}
                </div>
                <div>
                <span className='text-[#5a3535]'> Deadline : </span> {job.applicationDeadline}
                </div>
            </div>

            <div className='flex justify-between flex-wrap items-center space-y-2'>
            <div>
                Salary Range : {job.salaryRange} 
            </div>
            <div>
                Applicants : {job.applicantsCount} 
            </div>
          
            </div>
            
        </div>))}
                </TabPanel>

                <TabPanel>
                    {hybridJobs.map((job) => (
                        <div key={job._id} className='mb-10 border p-3 md:p-10 space-y-2 shadow-lg'>
            <div className='flex justify-between flex-wrap items-center space-y-2'>
                <div>
                    <span className='text-2xl text-[#5a3535] font-semibold'>{job.jobTitle}</span>
                </div>
                <div>
                    {job.employer}
                </div>
            </div>
            <div className='flex justify-between flex-wrap items-center space-y-2 '>
                <div>
                   <span className='text-[#5a3535]'> Posting Date : </span>{job.postingDate}
                </div>
                <div>
                <span className='text-[#5a3535]'> Deadline : </span> {job.applicationDeadline}
                </div>
            </div>

            <div className='flex justify-between flex-wrap items-center space-y-2'>
            <div>
                Salary Range : {job.salaryRange} 
            </div>
            <div>
                Applicants : {job.applicantsCount} 
            </div>
          
            </div>
            
        </div>
                    ))}
                </TabPanel>
                <TabPanel>
                    {partTimeJobs.map((job) => (
                        <div key={job._id} className='mb-10 border p-3 md:p-10 space-y-2 shadow-lg'>
            <div className='flex justify-between flex-wrap items-center space-y-2'>
                <div>
                    <span className='text-2xl text-[#5a3535] font-semibold'>{job.jobTitle}</span>
                </div>
                <div>
                    {job.employer}
                </div>
            </div>
            <div className='flex justify-between flex-wrap items-center space-y-2 '>
                <div>
                   <span className='text-[#5a3535]'> Posting Date : </span>{job.postingDate}
                </div>
                <div>
                <span className='text-[#5a3535]'> Deadline : </span> {job.applicationDeadline}
                </div>
            </div>

            <div className='flex justify-between flex-wrap items-center space-y-2'>
            <div>
                Salary Range : {job.salaryRange} 
            </div>
            <div>
                Applicants : {job.applicantsCount} 
            </div>
          
            </div>
            
        </div>
                    ))}
                </TabPanel>

            </div>
        </Tabs>




    </div>
    );

};

export default AppliedJobs;