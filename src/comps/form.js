import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Form = ({children, onSubmit}) =>{
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData.entries());
        onSubmit(formProps);
    }

    return (
        
            <form onSubmit={handleSubmit} className="">
                {children}

                <div className = "text-white flex justify-around  mb-16 mt-16 ">
                    <div> 
                        <Button className={"bg-custom-gradient mr-12 p-6 pl-24 pr-24 rounded-l-full rounded-r-full"}>
                            <span> Create </span>
                        </Button>
                    </div>
                    <div> 
                        <Button className={"bg-black gradient-border ml-12 p-6 pl-24 pr-24 "}>
                        <span> Cancel</span>
                        </Button>
                    </div>
                </div>
                <div className='text-white flex justify-center text-lg'>
                    <p className=''> Already have an account?<span className="text-link ml-6"> Login </span></p>
                </div>
                <div className = "text-lg text-white flex justify-center mt-8">
                    <p className=''> OR</p>
                </div>
                <div className="mt-6 flex justify-center">
                    <Button className={"bg-white mr-12 p-6 pl-24 pr-24 rounded-l-full rounded-r-full"}>
                    <span className='flex items-center justify-center'>
                        Continue with Google 
                        <i className="fab fa-google ml-4 text-2xl"></i>
                    </span>

                    </Button>
                </div>

            </form>
        
    );  
}

Form.protoTypes = {
    oSubmit:PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Form;