import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyJobRow from "../components/myJobRow";
import { Helmet } from "react-helmet";




const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [myJobsInfo, setMyJobs] = useState([])
    const url = `https://ass-11-server-side.vercel.app/myJobs?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyJobs(data))
    }, [url])
    return (
       

        <div className="py-20 mx-3 md:mx-12 lg:mx-28">
             <Helmet>
               
               <title>WorkFINDER | My Jobs</title>
               
           </Helmet>
        <h2 className="text-3xl text-[#362929] font-bold text-center my-20"> My Jobs: {myJobsInfo.length}</h2>
        <div className="overflow-x-auto w-full border rounded-lg p-3 border-[#362929] shadow-xl">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr className="text-[#362929]">
                        
                        <th>Image</th>
                        <th>Title</th>
                        <th>category</th>
                        <th>Salary Range</th>
                        <th>Applicants</th>
                        <th>Details</th>
                        <th>Update</th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        myJobsInfo.map(myJobs => <MyJobRow
                          key={myJobs._id} myJobs={myJobs} setMyJobs={setMyJobs} myJobsInfo={myJobsInfo}
                        ></MyJobRow>)
                    }
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default MyJobs;