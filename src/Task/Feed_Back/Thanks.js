import React from "react";
import './FeedBack.css';
import heart from './640px-Emoji_u2665.svg.png';

export function Thanks() {
    return (
        <>
            <div className="FeedBackBackground p-5">
                <div className="whiteFeedBack bg-light col-8 mx-auto rounded-5 p-5 text-center">
                    <img src={heart} className="col-2" />
                    <h1>Thank You!</h1>
                    <p className="col-8 mx-auto fs-3">We will use your feedback to improve our customer support performance.</p>
                </div>
            </div>
        </>
    );
}
