import React from "react";
import './FeedBack.css';
import sad from './sad-emoji-img.png';
import none from './none-emoji-img.png';
import happy from './happy-emoji-img.png';
import { Link } from "react-router-dom";

export function FeedBack() {
    return (
        <>
            <div className="FeedBackBackground p-5">
                <div className="whiteFeedBack bg-light col-8 mx-auto rounded-5 p-5 text-center">
                    <h1>How satisfied are you with our customer support performance?</h1>
                    <div className="d-flex justify-content-evenly">
                        <div>
                            <img src={sad} />
                            <p><Link to='/FeedBack/Thanks' className="text-decoration-none text-dark">SAD</Link></p>
                        </div>
                        <div>
                            <img src={none} />
                            <p><Link to='/FeedBack/Thanks' className="text-decoration-none text-dark">NONE</Link></p>
                        </div>
                        <div>
                            <img src={happy} />
                            <p><Link to='/FeedBack/Thanks' className="text-decoration-none text-dark">HAPPY</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}