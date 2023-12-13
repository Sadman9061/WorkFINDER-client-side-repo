import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import JobCard from './JobCard';

const CategorySelectingSection = () => {
  const [jobsInCategory, setJobsInCategory] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  }


  useEffect(() => {
    fetch('https://ass-11-server-side.vercel.app/allJobs' )
      .then(res => res.json())
      .then(data => setJobsInCategory(data))
  }, [])
  const remoteJobs = jobsInCategory.filter(job => job.category === 'Remote')
  const onSiteJobs = jobsInCategory.filter(job => job.category === 'On Site')
  const hybridJobs = jobsInCategory.filter(job => job.category === 'Hybrid')
  const partTimeJobs = jobsInCategory.filter(job => job.category === 'Part Time')
  console.log(activeTab);
  return (
    <div className="my-40 w-4/5 mx-auto ">


      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <div className='flex justify-center'>
          <TabList className={`flex flex-wrap gap-20 border-2 rounded-lg px-5 py-2 mb-20 interactable`}>
            <Tab className={`${activeTab === 0 ?'text-red-500 border-red-500 font-medium underline   ' :''}`}>All Jobs</Tab>
            <Tab className={`${activeTab === 1 ?'text-red-500 border-red-500 font-medium underline  ' :''}`}>Remote</Tab>
            <Tab className={`${activeTab ===2 ?'text-red-500 border-red-500  font-medium underline ' :''}`}>On Site</Tab>
            <Tab className={`${activeTab ===3?'text-red-500 border-red-500 font-medium underline  ' :''}`}>Hybrid</Tab>
            <Tab className={`${activeTab ===4 ?'text-red-500 border-red-500 font-medium underline ' :''}`}>Part Time</Tab>
          </TabList>
        </div>

      <div className='max-h-screen overflow-auto border-2'>
      <TabPanel>
          {jobsInCategory.map((job) => (
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

export default CategorySelectingSection;