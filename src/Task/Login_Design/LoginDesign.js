import React from "react";
import './LoginDesign.css';
import lap from '../Login_Design/lap.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function LoginDesign() {
    return (
        <>
            <div className="linear-gra p-5">
                <div className="whiteBack text-center bg-light rounded-5 row">
                    <div className="col-sm-6 p-5 d-flex align-items-top align-items-lg-center justify-content-center">
                        <img src={lap} className="imgBackLogin col-11 p-2 col-lg-8 p-lg-3 bg-secondary-subtle" />
                    </div>
                    <div className="col-sm-6 p-5 d-flex flex-column justify-content-center row">
                        <div>
                            <h3 className="col-12">Member Login</h3>
                            <br />
                            <div className="eInput bg-secondary-subtle rounded-5 p-2 mx-auto col-lg-6 row">
                                <FontAwesomeIcon icon={faEnvelope} className="p-2 col-2"></FontAwesomeIcon>
                                <input type="email" placeholder="Email" className="border border-0 inputBox bg-secondary-subtle col-8"></input>
                            </div>
                            <br />
                            <div className="passInput bg-secondary-subtle rounded-5 p-2 mx-auto col-lg-6 row">
                                <FontAwesomeIcon icon={faLock} className="p-2 col-2"></FontAwesomeIcon>
                                <input type="password" placeholder="......" className="border border-0 inputBox bg-secondary-subtle col-8"></input>
                            </div>
                            <br />
                            <button className="loginBtn border border-0 p-2 rounded-5 text-light fs-6 fw-bolder text-center col-12 col-md-6">LOGIN</button>
                            <br />
                            <br />
                            <p className="fw-bold">Forgot <span className="txtColor">Username / Password ?</span></p>
                            <a href="#" className="text-decoration-none fw-bolder fs-5 txtColor">Create your account </a>
                            <FontAwesomeIcon icon={faArrowRight} className="txtColor fw-bolder"></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
