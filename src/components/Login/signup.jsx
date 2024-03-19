import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope }  from "react-icons/fa6";
import { IoBag, IoBagCheck } from "react-icons/io5";
import toast from 'react-hot-toast';

export default function Signup(){

    const {
        register, 
        handleSubmit,
        watch,
        formState: { errors }, 
    } = useForm({mode: 'onChange'});

    //watch value of password1 field to match confirm password
    const password = watch("password1");

    const navigate = useNavigate();
    
    //fetch list of users from local storage
    let listOfUsers = JSON.parse(localStorage.getItem("usersRoama"));
    console.log(listOfUsers);
    //if no users, set list of users to empty array
        if(listOfUsers === null){
            listOfUsers = [];
        }
    
    const onSubmit = (signupData) => {
        // console.log(signupData);
        //save user to local storage on successful signup    
        listOfUsers.push(signupData);
        localStorage.setItem("usersRoama", JSON.stringify(listOfUsers));

        //notify user on successful signup and navigate to login page
        toast.success('Thank you for signing up! Please Login to continue', {
            duration: 5000,
        })
        navigate('/');        
    }

    return(
        <div className="signPage d-flex bg-primary vh-100 justify-content-center align-items-center">
                    
            <form className= "signForm p-3 bg-white rounded d-flex flex-column justify-content-center align-items-center"
                noValidate
                onSubmit={handleSubmit(onSubmit)} >
                <img className="w-50" src="/roama-logo.png" alt="Roama" />
                <hr className="mt-3 w-100 text-secondary"/>
                <div className="form-group mb-3 d-flex justify-content-between gap-2 w-100">
                    <div className="input-group name-box">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100" id="plane-lock">
                                <FaUser className="form-icon" />
                            </span>                       
                        </div>
                        <input 
                        type="text" 
                        className="form-control rounded-end" 
                        placeholder="First name*"
                        name="firstname"
                        {...register("firstname", {
                            required: "Please enter first name"
                        })}
                        />
                        {errors.firstname &&
                            <small className="ms-2 mb-0 errorMsg">{errors.firstname.message}</small>}
                    </div>
                    
                    <div className="input-group name-box">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100" id="plane-lock">
                                <FaUser  className="form-icon" />
                            </span>                       
                        </div>
                        <input 
                        type="text" 
                        className="form-control rounded-end" 
                        placeholder="Last name*"
                        name="lastname"
                        {...register("lastname", {
                            required: "Please enter last name"
                        })}
                        />
                        {errors.lastname && 
                            <small className="ms-2 mb-0 errorMsg">{errors.lastname.message}</small>}
                    </div>                    
                </div>

                <div className="input-group w-100">
                    <div className="input-group-prepend">
                        <span className="input-group-text h-100" id="plane-lock">
                            <FaUser className="form-icon" />
                        </span>                       
                    </div>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username*"
                        name="username"
                        {...register("username", {
                            required: "Please enter username",
                           validate: (value) => {
                            return !listOfUsers.some(user => user.username === value) || "username taken. Please try another"
                           }
                            
                        })}
                    />
                </div>
                {errors.username && 
                    <small className="ms-2 mb-0 errorMsg">{errors.username.message}</small>}

                <div className="input-group mt-3 w-100">
                    <div className="input-group-prepend">
                        <span className="input-group-text h-100" id="plane-lock">
                            <FaEnvelope className="form-icon" />
                        </span>                       
                    </div>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email*"
                        name="email"
                        {...register("email", {
                            required: "Please enter email",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Enter Valid email",
                            },
                            validate: (value) => {
                                return !listOfUsers.some(user => user.email === value) || "email exists! Please login"
                            }
                        })}
                    />
                </div>
                {errors.email &&
                        <small className=" mb-0 errorMsg">{errors.email.message}</small>}

                <div className="input-group mt-3 w-100">
                    <div className="input-group-prepend">
                        <span className="input-group-text h-100" id="plane-lock">
                            <IoBag className="form-icon" />
                        </span>                       
                    </div>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password*"
                        name="password1"
                        {...register("password1", {
                            required: "Please enter a password", 
                            minLength:{
                                value: 6,
                                message: "Password should have at least 6 characters"
                            }
                        })}
                    />
                </div>
                {errors.password1 &&
                        <small className=" mb-0 errorMsg">{errors.password1.message}</small>}

                <div className="input-group mt-3 w-100">
                    <div className="input-group-prepend">
                        <span className="input-group-text h-100" id="plane-lock">
                            <IoBagCheck className="form-icon" />
                        </span>                       
                    </div>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Confirm password*"
                        name="password2"
                        {...register("password2", { 
                            required: "Please confirm password",
                            validate: (value) => 
                                value === password || "Passwords should match"                            
                        })}
                    />     
                </div>
                {errors.password2 && 
                        <small className=" mb-0 errorMsg">{errors.password2.message}</small>}

                <button 
                    type="submit" 
                    className="btn signBtn mt-4 w-100 rounded border-0"
                >Sign up
                </button>   
                <hr className="mt-4 w-100 text-secondary"/>
                <div className="mb-3">
                    <small>
                        Already a Roama? 
                            <Link to='/' className="ms-2 ">Log in </Link>
                    </small>
                </div>                            
            </form>    
        </div>
    )    
}