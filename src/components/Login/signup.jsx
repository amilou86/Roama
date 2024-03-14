import React from "react";

export default function Signup(){
    return(
        <div className="signPage d-flex bg-primary vh-100 justify-content-center align-items-center">
                    
            <form className= "signForm p-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" >
                <img className="w-50 mb-3" src="/roama-logo.png" alt="Roama" />
                <div className="form-group row d-flex justify-content-between mb-3 w-100">
                    <input type="text" className="form-control col-6" id="firstname" placeholder="First name" />
                    <input type="text" className="form-control col-6" id="lastname" placeholder="Last name" />
                </div>
                <div className="form-group mb-3 w-100">
                    <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="form-group mb-3 w-100">
                    <input type="email" className="form-control" id="username" placeholder="Email" />
                </div>
                <div className="form-group mb-3 w-100">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group mb-3 w-100">
                    <input type="password" className="form-control" id="password" placeholder="Confirm password" />
                </div>
                <button type="submit" className="btn signBtn mt-3 w-100 rounded border-0">Sign up</button>   
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