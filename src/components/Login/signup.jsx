import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signup(){

    const {
        register, 
        handleSubmit,
        watch,
        formState: { errors }, 
    } = useForm({mode: 'onChange'});

    const onSubmit = (signupData) => {
        // console.log(signupData);

        //save user to local storage on successful signup
        let listOfUsers = JSON.parse(localStorage.getItem("usersRoama"));
        if(listOfUsers === null){
            listOfUsers = [];
        }
        listOfUsers.push(signupData);
        localStorage.setItem("usersRoama", JSON.stringify(listOfUsers));
        
    }
    const password = watch("password1");

    return(
        <div className="signPage d-flex bg-primary vh-100 justify-content-center align-items-center">
                    
            <form className= "signForm p-3 bg-white rounded d-flex flex-column justify-content-center align-items-center"
                noValidate
                onSubmit={handleSubmit(onSubmit)} >
                <img className="w-50 mb-3" src="/roama-logo.png" alt="Roama" />
                <div className="form-group mb-3 d-flex justify-content-between gap-2 w-100">
                    <div className="form-group"> 
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="First name*"
                        name="firstname"
                        {...register("firstname", {
                            required: "Please enter first name"
                        })}
                        />
                        {errors.firstname &&
                            <small className="ms-1 errorMsg">{errors.firstname.message}</small>}
                    </div>
                    
                    <div>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Last name*"
                        name="lastname"
                        {...register("lastname", {
                            required: "Please enter last name"
                        })}
                    />
                    {errors.lastname && 
                        <small className="ms-1 errorMsg">{errors.lastname.message}</small>}
                    </div>                    
                </div>

                <div className="form-group mb-3 w-100">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username"
                        name="username"
                        {...register("username")}
                    />
                </div>

                <div className="form-group mb-3 w-100">
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
                            }
                        })}
                    />
                    {errors.email &&
                        <small className="ms-1 errorMsg">{errors.email.message}</small>}
                </div>
                <div className="form-group mb-3 w-100">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password*"
                        name="password1"
                        {...register("password1", {
                            required: true, 
                            minLength:{
                                value: 6,
                                message: "Password should have at least 6 characters"
                            }
                        })}
                    />
                    {errors.password1 &&
                        <small className="ms-1 errorMsg">{errors.password1.message}</small>}
                </div>
                <div className="form-group mb-3 w-100">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Confirm password*"
                        name="password2"
                        {...register("password2", { 
                            required: true,
                            validate: (value) => 
                                value === password || "Passwords should match"
                            
                        })}
                    />
                    {errors.password2 && 
                        <small className="ms-1 errorMsg">{errors.password2.message}</small>}       
                </div>
                <button 
                    type="submit" 
                    className="btn signBtn mt-3 w-100 rounded border-0"
                >Sign up
                </button>   
                <hr className="mt-4 w-100"/>
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