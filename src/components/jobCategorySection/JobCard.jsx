import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    return (
        <div className='mb-10 border p-3 md:p-10 space-y-2 shadow-lg'>
            <div className='flex justify-between flex-wrap items-center space-y-2'>
                <div>
                    <span className='text-2xl  font-semibold'>{job.jobTitle}</span>
                </div>
                <div>
                    {job.employer}
                </div>
            </div>
            <div className='flex justify-between flex-wrap items-center space-y-2 '>
                <div>
                   <span className=''> Posting Date : </span>{job.postingDate}
                </div>
                <div>
                <span className=''> Deadline : </span> {job.applicationDeadline}
                </div>
            </div>

            <div className='flex justify-between flex-wrap items-center space-y-2'>
            <div>
                Salary Range : {job.salaryRange} 
            </div>
            <div>
                Applicants : {job.applicantsCount} 
            </div>
            <div>
                <Link to={`/allJobs/${job._id}`} className='form-control block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn  bg-white bg-gradient-to-l hover:from-[#ff6d2a] hover:to-[#e64146] border-2 border-[#362929] rounded-full text-[#362929]     normal-case interactable'>View Details</Link>
            </div>
            </div>
            
        </div>
    );
};
JobCard.propTypes = {
    job: PropTypes.object.isRequired
}
export default JobCard;