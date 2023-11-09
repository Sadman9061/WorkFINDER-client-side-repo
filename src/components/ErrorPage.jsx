import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-[100vh] w-full  bg-[#E8F5FD]">
        
        
        <div className="flex justify-center items-center h-[90vh]  ">
        <img className="w-full sm:w-3/6  " src="https://th.bing.com/th/id/OIG.WU56tAW.xTXkLjDB_OKw?pid=ImgGn" alt="" />
       
        </div>
        <div className="flex justify-center items-center "> 
        <Link to="/"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border-2 border-black  ">GO HOME</button></Link></div>
        </div>

            );
};

export default ErrorPage;