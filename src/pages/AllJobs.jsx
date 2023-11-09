import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import JobCard from "../components/jobCategorySection/JobCard";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {Helmet} from "react-helmet";
const AllJobs = () => {
    const [jobsInCategory, setJobsInCategory] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const data = useLoaderData();
    const [input, setInput] = useState("");
    const [filteredJobs, setFilteredJobs] = useState(data); // Initialize with the original data

    const handleTabSelect = (index) => {
        setActiveTab(index);
    }

    useEffect(() => {
        
        setJobsInCategory(data);
        setFilteredJobs(data); // Initialize with the original data
    }, [data]);

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
        const result = data.filter((job) => // Use 'data' instead of 'jobsInCategory'
            value && job.jobTitle.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredJobs(result);
    }

    return (
        <div className="py-36 w-4/5 mx-auto">
            <Helmet>
               
                <title>WorkFINDER | All Jobs</title>
                
            </Helmet>
            <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
                <h1 className="text-center text-3xl font-bold">All Jobs</h1>
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
                            <JobCard key={job._id} job={job} />
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {remoteJobs.map((job) => (
                            <JobCard key={job._id} job={job} />))}
                    </TabPanel>

                    <TabPanel>
                        {onSiteJobs.map((job) => (
                            <JobCard key={job._id} job={job} />))}
                    </TabPanel>

                    <TabPanel>
                        {hybridJobs.map((job) => (
                            <JobCard key={job._id} job={job} />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        {partTimeJobs.map((job) => (
                            <JobCard key={job._id} job={job} />
                        ))}
                    </TabPanel>

                </div>
            </Tabs>




        </div>
    );
};

export default AllJobs;