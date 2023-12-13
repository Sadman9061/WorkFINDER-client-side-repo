import { Link, NavLink, } from "react-router-dom";
// useLoaderData
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { VscSignIn } from "react-icons/vsc";

import { BiFace } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { BsPersonAdd } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";
import { BsJournalArrowDown } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";




const Navbar = ({ handleToggle, theme }) => {
    // const loadedUser = useLoaderData()


    const [click, setClick] = useState(false);

    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error);
            })
    }


    const handleClick = () => {
        setClick(!click)
        console.log(click);
    }


    return (
        <div
            className=" navbar backdrop-blur-md fixed z-10 shadow-xl" >



            {/* navbar start  */}

            <div className=" navbar-start " data-aos="fade-down"
                data-aos-anchor-placement="center"

                data-aos-duration="1000"  >
                <NavLink to='/'>  <div className="flex items-center interactable">

                    <h1 className="text-3xl font-bold    text-center ml-4 ">WorkFINDER</h1></div></NavLink>
            </div>

            {/* menu bar  */}

            <div className="navbar-center md:ml-12 lg:ml-20 md:space-x-12 lg:space-x-18 xl:space-x-20 hidden md:flex ">

                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                >
                    <AiOutlineHome className="text-2xl  interactable"></AiOutlineHome> <span className="text-sm interactable -ml-1">Home</span>
                </NavLink>

                <NavLink
                    to="/allJobs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                >
                    <MdWorkOutline className="text-2xl  interactable"></MdWorkOutline>  <span className="text-sm interactable -ml-3">All Jobs</span>
                </NavLink>

            {
                user?.email?
               <>
                 <NavLink
                to="/appliedJobs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
            >
                <BsTrophy className='text-2xl  interactable' ></BsTrophy> <span className="text-sm interactable -ml-6">Applied Jobs</span>
            </NavLink>

            <NavLink
                to="/addAJob"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
            >
                <BsPersonAdd className='text-2xl  interactable' ></BsPersonAdd>  <span className="text-sm interactable -ml-4">Add A Job</span>
            </NavLink>

            <NavLink
                to="/myJobs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
            >
                <BsJournalArrowDown className='text-2xl  interactable' ></BsJournalArrowDown>  <span className="text-sm interactable -ml-3">My Jobs</span>
            </NavLink>
               </>
            : ''
            }






              




            </div>
            <div data-aos="fade-down"
                data-aos-anchor-placement="center"

                data-aos-duration="1000"
                className="navbar-end md:hidden flex  ">


                <details className="dropdown  dropdown-end"
                >
                    <summary title="Menu" className={`m-1 btn btn-ghost btn-circle `} onClick={handleClick}  > {
                        click ? <RxCross2 className="text-2xl interactable"></RxCross2> : <RxHamburgerMenu className="text-2xl interactable"></RxHamburgerMenu>
                    }</summary>
                    <ul
                        className="space-y-3 mt-3 z-[1] p-2  menu menu-sm dropdown-content bg-base-100 shadow-2xl rounded-box w-52">
                        <li><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            <AiOutlineHome className="text-2xl  "></AiOutlineHome> Home
                        </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/allJobs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                <MdWorkOutline className="text-2xl  interactable"></MdWorkOutline> All Jobs
                            </NavLink>
                        </li>
                      {
                        user?.email?
                        <>
                          <li>
                            <NavLink
                                to="/appliedJobs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                <BsTrophy className='text-2xl  interactable' ></BsTrophy> Applied Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addAJob"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                <BsPersonAdd className='text-2xl  interactable' ></BsPersonAdd> Add A Job
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myJobs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                <BsJournalArrowDown className='text-2xl  interactable' ></BsJournalArrowDown> My Jobs
                            </NavLink>
                        </li>
                        </>:
                        ''
                      }
                        <li>
                            <NavLink
                                to="/blogs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                <BsInfoCircle className='text-2xl  interactable' ></BsInfoCircle> Blogs
                            </NavLink>
                        </li>



                        <li>
                            {
                                user ? <div><BiLogOut title="Log Out" className='text-2xl text-[#FF444A] interactable ' onClick={handleSignOut}></BiLogOut> Log Out</div> :
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending " : isActive ? "text-[#FF444A] underline " : ""
                                        }
                                    >
                                        <BiLogIn title="Log In" className="text-2xl text-[#FF444A] interactable -ml-1 mr-1"></BiLogIn> Log In
                                    </NavLink>
                            }
                        </li>
                        <li>
                            <NavLink
                                to="/registration"
                                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                                }
                            >
                                <VscSignIn title="Sign Up" className='text-2xl ' ></VscSignIn> Sign Up
                            </NavLink>

                        </li>
                        <li>
                            <div>
                                <button title="Theme" >
                                    <label className="swap swap-rotate " data-aos="fade-down"
                                        data-aos-anchor-placement="center"

                                        data-aos-duration="1000"  >
                                        <input
                                            className="invisible"
                                            type="checkbox"
                                            value='click'
                                            onChange={handleToggle}
                                            // show toggle image based on local storage theme
                                            checked={theme === "light" ? false : true}
                                        />
                                        {/* light theme sun image */}
                                     
                                        <svg className="swap-on fill-current w-6 h-6  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                        {/* dark theme moon image */}
                                        
                                        <svg className="swap-off fill-current w-6 h-6  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                    </label>
                                </button>
                                <div>Theme</div>
                            </div>
                        </li>





                        <li> <label tabIndex={0} className="btn btn-ghost btn-circle ">
                            <div data-aos="fade-down"
                                data-aos-anchor-placement="center"

                                data-aos-duration="1000" className="w-8 rounded-full"  >
                              {
                                user?.email ?
                                <button className="btn btn-ghost btn-circle ml-1  interactable w-8 rounded-full">
                                {
                                    user && user ? '' : <img title="Profile" className=" border-[#FF444A] border-2 rounded-full" src="https://web.programming-hero.com/static/media/profileImage.934e5b10.png" alt="" />
                                }

                                {user && user?.photoURL ? <img title="Profile" className=" rounded-full  border-[#FF444A] border-2" src={user && user.photoURL} alt="" /> :
                                    <div>{
                                    }</div>}
                            </button>
                            :''
                              }
                            </div>
                        </label>

                            {user && user?.photoURL ? <h1>{user && user.displayName}</h1> :
                                <div>{
                                    // user && user && loadedUser?.map(user => <h1 key={user._id}>{user.name}</h1>)
                                }</div>}</li>










                    </ul>
                </details>
            </div>

            {/* profile  */}

            <div className="navbar-end hidden md:flex  ">
                <div className=" mr-4">

                    {/* PROOOOOOOOOOFILE  */}

                   {
                    user?.email? 

                    <div className="flex gap-2">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle ">
                            <div data-aos="fade-down"
                                data-aos-anchor-placement="center"

                                data-aos-duration="1000" className="w-12 rounded-full"  >
                                <button className="btn btn-ghost btn-circle  interactable w-12 rounded-full">
                                    {
                                        user && user ? '' : <img title="Profile" className="mt-2 border-[#362929] border-2 rounded-full" src="https://web.programming-hero.com/static/media/profileImage.934e5b10.png" alt="" />
                                    }

                                    {user && user?.photoURL ? <img title="Profile" className=" rounded-full  border-[#362929] border-2" src={user && user.photoURL} alt="" /> :
                                        <div>{
                                            // user && loadedUser?.map(user => <img key={user._id} title="Profile" className=" rounded-full  border-[#FF444A] border-2" src={user.photo} alt="" />)
                                        }</div>}
                                </button>
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 space-y-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">


                            <li data-aos="fade-down"
                                data-aos-anchor-placement="center"

                                data-aos-duration="1000">



                                {user && user?.photoURL ? <h1><BiFace className='text-2xl '></BiFace> {user && user.displayName}</h1> :
                                    <div>{
                                        // user && user && loadedUser?.map(user => <h1 key={user._id}><BiFace className='text-2xl text-[#FF444A]'></BiFace> {user.name}</h1>)
                                    }</div>}

                            </li>

                            <li>
                                {
                                    user ? <div><BiLogOut title="Log Out" className='text-2xl -ml-1  interactable ' onClick={handleSignOut}></BiLogOut> Log Out</div> :
                                        <NavLink
                                            to="/login"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending " : isActive ? "text-[#FF444A] underline " : ""
                                            }
                                        >
                                            <BiLogIn title="Log In" className="text-2xl  interactable -ml-1 mr-1 "></BiLogIn> Log In
                                        </NavLink>
                                }
                            </li>
                            <li>
                                <NavLink
                                    to="/blogs"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    <BsInfoCircle className='text-xl  interactable' ></BsInfoCircle>  Blog
                                </NavLink>
                            </li>
                            <li>
                                <div>
                                    <button title="Theme" >
                                        <label className="swap swap-rotate interactable" data-aos="fade-down"
                                            data-aos-anchor-placement="center"

                                            data-aos-duration="1000"  >
                                            <input
                                                className="invisible"
                                                type="checkbox"
                                                value='click'
                                                onChange={handleToggle}
                                                // show toggle image based on localstorage theme
                                                checked={theme === "light" ? false : true}
                                            />
                                            {/* light theme sun image */}
                                          
                                            <svg className="swap-on fill-current w-6 h-6  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                            {/* dark theme moon image */}
                                         
                                            <svg className="swap-off fill-current w-6 h-6  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                        </label>
                                    </button> <div >Theme</div>
                                </div>
                            </li>



                            <li>

                                <NavLink
                                    to="/registration"
                                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] interactable underline " : ""
                                    }
                                >
                                    <VscSignIn title="Sign Up" className='text-2xl interactable' ></VscSignIn> Sign Up
                                </NavLink>

                            </li>

                        </ul>
                    </div>
                </div>

                :
                <NavLink
                to="/login"
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                }
            >
                   <button className="form-control block w-full select-none interactable  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn btn-primary bg-gradient-to-l from-[#5a3535] to-[#362929] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-full text-white   normal-case">Login</button>
            </NavLink>

            
                   }
                </div>
            </div>
        </div >
    );
};
export default Navbar;