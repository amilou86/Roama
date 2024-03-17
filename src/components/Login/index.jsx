import React from "react";
import './login.css';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUser }  from "react-icons/fa6";
import { IoBag } from "react-icons/io5";

export default function Login(props){

    const {
        register, 
        handleSubmit,
        formState: { errors }, 
    } = useForm({mode: 'onChange'});


    const navigate = useNavigate();
    

    const onSubmit = (loginData) => {
        navigate('/home');
        props.setUserData({
            username: loginData.username,
            firstname: loginData.firstname,
            lastname: loginData.lastname,
            email: loginData.email
        })
        // console.log(loginData);
        //check user exists in list of signed up users
        // const listOfUsers = JSON.parse(localStorage.getItem("usersRoama"));
        // console.log(listOfUsers);
        // if(listOfUsers !== null){
            
        //     const loggedInUser = listOfUsers.filter(user => user.username === loginData.username);
            
        //     if(loggedInUser.length === 1){
        //         // console.log(loggedInUser)
        //         props.setUserData({
        //             username: loggedInUser[0].username,
        //             firstname: loggedInUser[0].firstname,
        //             lastname: loggedInUser[0].lastname,
        //             email: loggedInUser[0].email
        //         })
        //         navigate('/home');
        //     }else {
        //         alert("Incorrect login details!");
        //     }
        // } else {
        //     alert("Please sign up!")
        // }
    }

    return(
        <div className="signPage d-flex bg-primary vh-100 justify-content-center align-items-center">                
            <form className= "signForm p-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" 
            onSubmit={handleSubmit(onSubmit)}>
                <img className="w-50 mb-3" src="/roama-logo.png" alt="Roama" />
                <div className="input-group w-100">
                    <div className="input-group-prepend">
                        <span className="input-group-text h-100">
                            <FaUser  className="form-icon" />
                        </span>                       
                    </div>
                    <input 
                        type="text"
                        className="form-control" 
                        placeholder="Username*"
                        name="username"
                        {...register("username", {
                            // required: "Please enter username"
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
                        className="form-control" 
                        placeholder="Password*"
                        name="password"
                        {...register("password", {
                            // required: "Please enter your password", 
                        })}
                    />
                </div>
                 {errors.password &&
                    <small className="ms-1 errorMsg">{errors.password.message}</small>}
                <small className="form-text mt-2 ms-auto">
                    <a href="#">Forgot Password?</a>
                </small>
                <button 
                    type="submit" 
                    className="btn signBtn mt-3 w-100 rounded border-0"
                >Log in
                </button>   
                <hr className="mt-4 w-100"/>
                <div className="mb-3">
                    <small>
                        New to Roama? 
                        <Link to='/signup' className="ms-2 ">Sign up</Link>
                    </small>
                </div>                    
            </form>
        </div>
    )
}