import { useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [registrationError, setRegistrationError] = useState('');
  const [succes, setSucces] = useState('')

  const handleRegistration = (e) => {
    e.preventDefault();
    setRegistrationError('')
    setSucces('')


    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    if (!/[A-Z]/.test(password) || ! /[\W]/.test(password)) {
      setRegistrationError('Password must be at least 6 characters long, contain at least one lowercase letter, and at least one special character or digit.')
      return;
    }
    else {
      console.log(name, photo, email, password);

      const user = { email, name, photo, password };
      createUser(email, password)
        .then(result => {
          console.log(result.user);
         

          // fetch('https://assignment-10-server-side-2-qsbjnaqb0.vercel.app/user', {
          //   method: 'POST',
          //   headers: {
          //     'content-type': 'application/json'
          //   },
          //   body: JSON.stringify(user)
          // })
          //   .then(res => res.json())
          //   .then(data => {
          //     if (data.insertedId) {
          //       setSucces('Success ')
                
          //     }
          //   })
        })
        .catch(error => {
          setRegistrationError(error.message);
        })
    }
    
  }
  
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-between items-center bg-white py-20">
      <img className="w-96 md:w-[61%]  " src="https://i.ibb.co/QMh4kRc/undraw-My-password-re-ydq7.png" alt="" />
      <div className=" border-2 border-[#362929] ml-30 lg:ml-20 relative flex flex-col w-60 mx-auto md:w-96  rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-2xl 
      ">
        <h1 className=" text-4xl font-semibold  my-5 bg-gradient-to-l from-[#5a3535] to-[#362929] text-center  bg-clip-text text-transparent ">Sign Up</h1>

        <form onSubmit={handleRegistration} className="mt-8 p-4 mb-2    max-w-screen-lg ">
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full ">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#362929]  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                required name="name"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#362929] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#362929] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#362929] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Name
              </label>
            </div>
            <div className="relative h-11 w-full ">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#362929]  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                name="photo"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#362929] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#362929] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#362929] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Photo URL
              </label>
            </div>
            <div className="relative h-11 w-full ">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#362929]  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                required name="email" 
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#362929] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#362929] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#362929] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full ">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#362929]  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                required name="password" 
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#362929] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#362929] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#362929] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
           
          </div>

          <input className="block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn btn-primary bg-gradient-to-l from-[#5a3535] to-[#362929] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-full text-white   normal-case interactable"
            type="submit"
            data-ripple-light="true" value='Register' />
          <div className="flex justify-center  items-center mt-4">
            <p className=" text-sm block text-center font-sans  font-normal leading-relaxed text-gray-700 antialiased">
              Already have an account?

            </p>

            <Link className="ml-1 block font-sans text-sm font-bold leading-normal bg-gradient-to-l from-[#5a3535] to-[#362929]  bg-clip-text text-transparent antialiased interactable " to='/login'>Login</Link>

          </div>
        </form>
        {
          registrationError && <p className="text-red-500 text-sm font-semibold">{registrationError}</p>
        }
        {
          succes && <p className="text-green-400 text-sm font-semibold">{succes}</p>
        }
      </div>
    </div>
  );
};

export default Registration;