import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEnvelope }  from "react-icons/fa6";
import { IoBag, IoBagCheck } from "react-icons/io5";
import toast from 'react-hot-toast';

export default function ResetForm(props){

    const {
        register, 
        handleSubmit,
        watch,
        formState: { errors }, 
    } = useForm({mode: 'onChange'});

    //watch value of password1 field to match confirm password
    const password = watch("password1");

    const navigate = useNavigate();
   
    const onSubmit = (resetData) => {
        //fetch list of users from local storage
        let listOfUsers = JSON.parse(localStorage.getItem("usersRoama"));
        console.log(listOfUsers);
        if(listOfUsers !== null){
            const currentUser = listOfUsers.find(user => user.email === resetData.email);
            if(currentUser === undefined){
                toast.error("Sorry! coundn't find you! Please sign up!")
            }else{
                currentUser.password1 = resetData.password1;
                currentUser.password2 = resetData.password2;
                toast.success("Password has been reset! Please login!", {
                    duration: 5000,
                });
            }
        }else{
            toast.error("Sorry! coundn't find you! Please sign up!");
        }        
        localStorage.setItem("usersRoama", JSON.stringify(listOfUsers));
        console.log(listOfUsers);
        props.setShow(false);                       
    }

    return(
        <div className="d-flex justify-content-center align-items-center">
                    
            <form className= "signForm p-1 bg-white rounded d-flex flex-column justify-content-center align-items-center"
                noValidate
                onSubmit={handleSubmit(onSubmit)}>

                <div className="input-group mt-2 w-100">
                    <div className="input-group-prepend">
                        <span className="input-group-text h-100" id="plane-lock">
                            <FaEnvelope className="form-icon" />
                        </span>                       
                    </div>
                    <input 
                        type="email" 
                        className="form-control landing-forms" 
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
                        className="form-control landing-forms" 
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
                        className="form-control landing-forms" 
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
                
                <hr className="mt-4 vw-100 text-secondary"/>
                <button 
                    type="submit" 
                    className="btn signBtn mt-3 mb-2 w-100 rounded border-0"                    
                >Submit
                </button>                 
            </form>    
         </div>
    )    
}