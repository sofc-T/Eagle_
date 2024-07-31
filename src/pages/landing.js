import React from 'react';
import StarList from '../comps/stars.js';
import Button from '../comps/button.js';



const Landing = () => {
  return (
    <div className="flex bg-black">
      <div className="w-60%">
        <div>
          <div className="text-white text-8xl ml-16  mt-36 pl-28 pt-10 font-ibm-plex-sans">
            <p> Fly towards </p>
            <p>Success </p>
          </div>
          <div className="text-zinc-300 ml-16 pl-28 p-12 text-xl"> 
            <p>Know who you are, track your actions, and see how you soar today compared to yesterday. Elevate your journey with every step.</p>
          </div>
        </div>
        <div className="text-white text-center m-12  pt-16 ">
          <StarList number={5} color={"icon-gradient"}></StarList>
        </div>
        <div className = "text-white flex justify-around p-12 mb-28 pl-16">
          <div> 
            <Button className={"bg-custom-gradient p-6 pl-16 pr-16 rounded-l-full rounded-r-full"}>
              <span> Get Started</span>
            </Button>
          </div>
          <div> 
            <Button className={"bg-reverse-custom-gradient p-6 pl-16 pr-16 rounded-l-full rounded-r-full"}>
              <span> About Eagle</span>
            </Button>
          </div>
        </div>

      </div>
      <div className="w-40% ellipse1-bg">
        <div> 
          <img src="eagle_no_bg.png" className='mt-32 w-11/12 opacity-25'></img>
        </div>
      </div>
    </div>
  );
};

export default Landing;
