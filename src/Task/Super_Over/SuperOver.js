import React from "react";
import './SuperOver.css';
import rcb_img from './rcb-img.png';
import csk_img from './csk-img.png';

export function SuperOver() {
    return (
        <>
            <div className="back text-center d-flex flex-column justify-content-center">
                <h1>Super Over League</h1>
                <div className="col-8 mx-auto">
                    <img src={rcb_img} className="col-lg-4 col-11" />
                    <img src={csk_img} className="col-lg-4 col-11" />
                </div>
            </div>
        </>
    );
}