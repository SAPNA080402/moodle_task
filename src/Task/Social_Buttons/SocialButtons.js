import React from "react";
import './SocialButtons.css';

export function SocialButtons() {
    return (
        <>
            <div className="body text-center col-12 d-flex align-items-center">
                <div className="col-lg-8 mx-auto align-center">
                    <h1 className="socialH1">Social Buttons</h1>
                    <div className="row column-gap-3 column-gap-md-5 justify-content-center">
                        <div className="like text-light col-md-1 col-3 p-2 rounded-2">Like</div>
                        <div className="bg-light col-md-2 col-4 p-2 rounded-2">Comment</div>
                        <div className="share text-light col-md-1 col-3 p-2 rounded-2">Share</div>
                    </div>
                </div>
            </div>
        </>
    );
}

