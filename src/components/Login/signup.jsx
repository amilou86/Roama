import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signup(){

    const {
        register, 
        handleSubmit, 
        formState: { errors }, 
    } = useForm();

    const onSubmit = (signupData) => {
        console.log(signupData);
        
    }

    return(
        <div className="signPage d-flex bg-primary vh-100 justify-content-center align-items-center">
                    
            <form className= "signForm p-3 bg-white rounded d-flex flex-column justify-content-center align-items-center"
                onSubmit={handleSubmit(onSubmit)} >
                <img className="w-50 mb-3" src="/roama-logo.png" alt="Roama" />
                <div className="form-group row d-flex justify-content-between mb-3 w-100">
                    <input 
                        type="text" 
                        className="form-control col-6" 
                        id="firstname" 
                        placeholder="First name"
                        name="firstname"
                        {...register("firstname")}
                    />
                    <input 
                        type="text" 
                        className="form-control col-6" 
                        id="lastname" 
                        placeholder="Last name"
                        name="lastname"
                        {...register("lastname")}
                    />
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
                        placeholder="Email"
                        name="email"
                        {...register("email")}
                    />
                </div>
                <div className="form-group mb-3 w-100">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password"
                        name="password1"
                        {...register("password1")}
                    />
                </div>
                <div className="form-group mb-3 w-100">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Confirm password"
                        name="password2"
                        {...register("password2")}
                    />
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