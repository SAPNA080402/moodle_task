import React from "react";
import './CongradsCard.css';
import back from './congrats-card-bg.png';
import profile from './congrats-card-profile-img.png';
import watch from './congrats-card-watch-img.png';

export function CongradsCard() {
    return (
        <>
            <div className="bgimg container-fluid">
                <h1 className="text-center">Congratulations</h1>
                <div className="innerDiv mx-auto text-center col-lg-4 p-2">
                    <img src={profile} />
                    <h2>Kiran V</h2>
                    <p>Vishnu Institute of Computer Education and Technology Bhimavaram</p>
                    <img src={watch} />
                </div>
            </div>
        </>
    );
}