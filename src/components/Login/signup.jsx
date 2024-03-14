import React, { useState } from "react";

export default function Signup(){

    //set initial state
    const [signupData, setSignupData ] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password1: '',
        password2: ''
    });

    const handleInputChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;
        setSignupData({
            ...signupData,
            [name]: value,
        });
        // console.log(signupData);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(signupData);
    }

    return(
        <div className="signPage d-flex bg-primary vh-100 justify-content-center align-items-center">
                    
            <form className= "signForm p-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" >
                <img className="w-50 mb-3" src="/roama-logo.png" alt="Roama" />
                <div className="form-group row d-flex justify-content-between mb-3 w-100">
                    <input 
                        type="text" 
                        className="form-control col-6" 
                        id="firstname" 
                        placeholder="First name"
                        name="firstname"
                        value={signupData.firstname}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        className="form-control col-6" 
                        id="lastname" 
                        placeholder="Last name"
                        name="lastname"
                        value={signupData.lastname}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mb-3 w-100">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username"
                        name="username"
                        value={signupData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mb-3 w-100">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email"
                        name="email"
                        value={signupData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mb-3 w-100">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password"
                        name="password1"
                        value={signupData.password1}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mb-3 w-100">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Confirm password"
                        name="password2"
                        value={signupData.password2}
                        onChange={handleInputChange}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn signBtn mt-3 w-100 rounded border-0"
                    onClick={handleFormSubmit}
                >Sign up
                </button>   
                <hr className="mt-4 w-100"/>
                <div className="mb-3">
                    <small>
                        Already a Roama? 
                            <a className="ms-2 " href="#">Log in </a>
                    </small>
                </div>
                        
    
            </form>
    
        </div>

    )
    
}