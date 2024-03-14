import React from "react";
import './login.css';

export default function Login(){
    return(
        <div className="signPage d-flex bg-primary vh-100 justify-content-center align-items-center">
                
                <form className= "signForm p-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" >
                    <img className="w-50 mb-3" src="/roama-logo.png" alt="Roama" />
                    <div className="form-group mb-3 w-100">
                        <input type="text" className="form-control" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group w-100">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <small className="form-text mb-3">
                        <a href="#">Forgot Password?</a>
                    </small>
                    <button type="submit" className="btn signBtn mt-3 w-100 rounded border-0">Log in</button>   
                    <hr className="mt-4 w-100"/>

                    <div className="mb-3">
                        <small>
                            New to Roama? 
                            <a className="ms-2 " href="#">Sign up</a>
                        </small>
                    </div>
                    

                </form>

        </div>
    )
}