import React from "react";
import { Link } from "react-router-dom";
import './MyNav.css';

export function MyNav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <li className="nav-link p-2 fs-6">
                                <Link to='/' className="text-dark text-decoration-none">Home</Link>
                            </li>
                            <li className="nav-item p-2 fs-6">
                                <Link to='/CongratsCard' className="text-dark text-decoration-none">Congrats Card</Link>
                            </li>
                            <li className="nav-item p-2 fs-6">
                                <Link to='/SuperOver' className="text-dark text-decoration-none">Super Over</Link>
                            </li>
                            <li className="nav-item p-2 fs-6">
                                <Link to='/SocialButtons' className="text-dark text-decoration-none">Social Buttons</Link>
                            </li>
                            <li className="nav-item p-2 fs-6">
                                <Link to='/Notification' className="text-dark text-decoration-none">Notification</Link>
                            </li>
                            <li className="nav-item p-2 fs-6">
                                <Link to='/LoginDesign' className="text-dark text-decoration-none">Login Design</Link>
                            </li>
                            <li className="nav-item p-2 fs-6">
                                <Link to='/LearnTech' className="text-dark text-decoration-none">Learn Tech</Link>
                            </li>
                            <li className="nav-item p-2 fs-6">
                                <Link to='/CounterHook' className="text-dark text-decoration-none">Counter Hook</Link>
                            </li>
                            <li className="nav-item p-2 fs-6">
                                <Link to='/Fake' className="text-dark text-decoration-none">Fake Data</Link>
                            </li>
                            <li className="nav-item p-2 fs-6">
                                <Link to='/CounterFruits' className="text-dark text-decoration-none">Counter Fruits</Link>
                            </li>
                            <li className="nav-item p-2 fs-6">
                                <Link to='/FeedBack' className="text-dark text-decoration-none">Feed Back</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}