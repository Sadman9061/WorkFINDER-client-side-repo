import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../providers/AuthProvider";



const Login = () => {
    const { login ,handleGoogleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const [succes, setSucces] = useState('');
    const [loginEror, setLoginError] = useState('')

  const handleGoogle = ()=>{
    handleGoogleSignIn()
    .then(result =>{
        console.log(result.user);
        setSucces('succesfulllllll')
        navigate(location?.state ? location.state : '/')
    })
    .catch(error=>{
        console.error(error);
        
    })
  }
    const handleLogin = (e) => {
        e.preventDefault();
        setLoginError('');
        setSucces('')

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        login(email, password)
            .then(result => {
                setSucces('succesful')
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                if (error.message) {
                    setLoginError('Incorrect email or password. Please try again.');
                }
            });
    }
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white py-20 pt-32">
            <img className="w-96 md:w-[53%]" src="https://i.ibb.co/MB1hTJL/undraw-secure-login-pdn4.png" alt="" />
            <form onSubmit={handleLogin}>
                <div className="mx-2 md:20 lg:mr-20  relative flex w-60 md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700  border-2 border-[#362929] shadow-2xl">


                    <div className="flex flex-col gap-4 p-6 ">
                        <h1 className="text-4xl font-semibold  my-5  bg-gradient-to-l from-[#5a3535] to-[#362929] text-center  bg-clip-text text-transparent">Login</h1>
                        <div className="relative h-11 w-full min-w-[200px] ">

                            <input
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#362929] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                required name="email"
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#362929] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#362929] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#362929] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#362929] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                required name="password"

                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#362929] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#362929] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#362929] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>

                    </div>

                    <div className="p-6 pt-0 interactable">
                        <input className="form-control block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn btn-primary bg-gradient-to-l from-[#5a3535] to-[#362929] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-full text-white   normal-case"
                            data-ripple-light="true" type="submit" value='Login' />

                        <div>
                        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                            Do not have an account?

                            

                        </p>
                        <Link className="interactable ml-1 block font-sans text-sm font-bold leading-normal bg-gradient-to-l from-[#5a3535] to-[#362929] text-center  bg-clip-text text-transparent antialiased
                            " to='/registration'>Sign up</Link>
                        </div>
                        <div>
                   <h1 className="text-center">or</h1>
                      <div className="flex justify-center my-4 items-center "><FcGoogle onClick={handleGoogle} className='interactable text-4xl w-full   py-3 px-6 text-center   font-bold shadow-lg hover:shadow-xl    btn hover:border-[#362929] border-[#362929]   rounded-full    normal-case'></FcGoogle></div>
                   </div>
                        
                    </div>
                   

                </div>
                {
                    loginEror && <p className="text-red-500 text-sm font-semibold text-center ml-0 lg:ml-32 mt-4">{loginEror}</p>
                }
                {
                    succes && <p className="text-green-400 text-xs font-semibold text-center ml-0 lg:ml-32 mt-4">{succes}</p>
                }
            </form>

        </div>
    );
};

export default Login;