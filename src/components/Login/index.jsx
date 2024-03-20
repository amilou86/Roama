import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Reset from "./reset";
import { FaUser }  from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { PiAirplaneTiltFill } from "react-icons/pi";
import toast from 'react-hot-toast';
import './login.css';

export default function Login(props){

    const {
        register, 
        handleSubmit,
        formState: { errors }, 
    } = useForm({mode: 'onChange'});


    const navigate = useNavigate();
    

    const onSubmit = (loginData) => {
        props.setUserData({
            username: loginData.username,
            firstname: loginData.firstname,
            lastname: loginData.lastname,
            email: loginData.email
        })

        //check user exists in list of signed up users
        const listOfUsers = JSON.parse(localStorage.getItem("usersRoama"));
        if(listOfUsers !== null){ 

            const loggedInUser = listOfUsers.filter(user => (user.email === loginData.username || user.username === loginData.username) && user.password1 === loginData.password);
            console.log(loggedInUser);
            if(loggedInUser.length === 1){
                props.setUserData({
                    username: loggedInUser[0].username,
                    firstname: loggedInUser[0].firstname,
                    lastname: loggedInUser[0].lastname,
                    email: loggedInUser[0].email
                })
                toast.success(<div>Welcome <strong className="toast-text">{loggedInUser[0].firstname}</strong>!</div>, {
                    icon: <PiAirplaneTiltFill className="form-icon" />,
                });
                navigate('/home');
            }else {
                toast.error('Incorrect login details!')
            }
        } else { 
            toast.error('Please sign up!');
        }
    }

    return(
        <div className="signPage d-flex bg-primary vh-100 justify-content-center align-items-center">                
            <div className= "signForm p-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" 
            >
                <img className="w-50" src="/roama-logo.png" alt="Roama" />
                <hr className="mt-3 w-100 text-secondary"/>
                <form  className="w-100" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text h-100">
                            <FaUser  className="form-icon" />
                        </span>                       
                    </div>
                    
                    <input 
                        type="text"
                        className="form-control landing-forms" 
                        placeholder="Username/Email*"
                        name="username"
                        {...register("username", {
                            required: "Please enter username"
                        })}                       
                    />
                </div>
                {errors.username &&
                     <small className="ms-1 errorMsg">{errors.username.message}</small>}

                <div className="input-group mt-3 w-100">
                    <div className="input-group-prepend">
                        <span className="input-group-text h-100">
                            <IoBag className="form-icon" />
                        </span>
                        
                    </div>
                    
                    <input 
                        type="password"
                        className="form-control landing-forms" 
                        placeholder="Password*"
                        name="password"
                        {...register("password", {
                            required: "Please enter your password", 
                        })}
                    />
                </div>
                 {errors.password &&
                    <small className="ms-1 errorMsg">{errors.password.message}</small>}
                <small className="form-text mt-2 ms-auto">
                    
                    
                </small>
                <button 
                    type="submit" 
                    className="btn signBtn mt-3 w-100 rounded border-0"
                >Log in
                </button>   
                </form>

                <small className="d-block mt-2  ms-auto">
                        <Reset/>
                </small>

                <hr className=" w-100 text-secondary"/>

                <div className="mb-3">                 
                    <small className="mx-2">
                        New to Roama? 
                        <Link to='/signup' className="ms-2 ">Sign up</Link>
                    </small>
                </div>                   
            </div>

            
        </div>
    )
}