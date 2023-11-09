import { RiDeleteBin5Line } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyJobRow = ({ myJobs , setMyJobs,myJobsInfo}) => {
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://ass-11-server-side.vercel.app/myJobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your items has been deleted.',
                                'success'
                            )
                            const remaining = myJobsInfo?.filter(job => job._id !== _id);
                            setMyJobs(remaining);
                        }
                    })

            }
        })
    }

    return (
        <tr className="border-b-8 ">
            
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {myJobs.jobBanner && <img src={myJobs.jobBanner} alt="Banner" />}
                    </div>
                </div>
            </td>
            <td>
                {myJobs.jobTitle}
            </td>
            <td>{myJobs.category}</td>
            <td>
               {myJobs.salaryRange} 
            </td>
            <td>
               {myJobs.applicantsCount} 
            </td>
            <td>
           <Link to={`/allJobs/${myJobs._id}`}>
           <BiLinkExternal  className='text-2xl h-10 p-2 w-10 btn btn-sm form-control block  select-none   text-center align-middle     shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none    bg-gradient-to-l hover:from-[#ff6d2a] hover:to-[#e64146]  interactable btn-circle border-[#362929]'></BiLinkExternal>
           </Link>
            </td>
            <th>
            <Link to={`/myJobs/${myJobs._id}`}> <RxUpdate className='text-2xl h-10 p-2 w-10 btn btn-sm form-control block  select-none   text-center align-middle     shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none    bg-gradient-to-l hover:from-[#ff6d2a] hover:to-[#e64146]  interactable btn-circle border-[#362929]'></RxUpdate></Link>
           
            </th>
            <th>
                <button onClick={()=>handleDelete(myJobs._id)} >
                    
                     <RiDeleteBin5Line className="text-2xl h-10 p-2 w-10 btn btn-sm form-control block  select-none   text-center align-middle     shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none    bg-gradient-to-l hover:from-[#ff6d2a] hover:to-[#e64146]  interactable btn-circle bg-[#e64146] text-white"></RiDeleteBin5Line>
                </button>
            </th>
        </tr>
    );
};
MyJobRow.propTypes = {
    myJobs:PropTypes.object,
    setMyJobs:PropTypes.func,
    myJobsInfo:PropTypes.array
}
export default MyJobRow;