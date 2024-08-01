import React from 'react';
import Form from '../comps/form.js';
import Ellipse from '../assets/Ellipse 33.svg';


const Login = () => {
  return (
    <div className="flex bg-black min-h-screen overflow-hidden relative">
      <div className="w-40% bg-opacity-100">
        <div className='flex flex-col justify-center h-screen items-end  '>
          <div className="text-white text-5xl  font-ibm-plex-sans">
            <p>LOG IN TO YOUR ACCOUNT</p> 
          </div>
          <div className = "text-white text-2xl  font-ibm-plex-sans  whitespace-nowrap">
          <p> Glad to see you again.</p> 
          </div>
        </div>
          <img src={Ellipse} alt="Ellipse" className="absolute top-6  -left-96 h-lvh opacity-45 border-black rotate-270"/>
        </div>
      <div className="w-60%">
        <div className="mt-64 flex justify-center items-center"> 
          <Form className="text-white" message1={"Login"} message2={"Forgot your Password?"} message3={"Reset Password"}>
            <div className="mb-4 text-white">
                <input type="email" name="email" placeholder="Email" required className="bg-black border border-zinc-50  p-4 rounded-lg w-full"/>
            </div>
            <div className="mb-4 text-white">
                <input type="password" name="password" placeholder="Password" required className="bg-black border-zinc-50 border p-4 rounded-lg w-full"/>
            </div>
          </Form>
          <img src={Ellipse} alt="Ellipse" className="absolute bottom-6 -right-96 h-lvh opacity-45 border-black rotate-"/>
        </div>
      </div>
    </div>
  );
};

export default Login;

