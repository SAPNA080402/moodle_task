import React from "react";
import './Notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"

export function Notification() {
    return (
        <>
            <h1 className="text-center">Notifications</h1>
            <div className="container-fluid row text-light mx-auto">
                <h5 className="bg-primary p-4 col-md-6 col-lg-3"><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> Information Message</h5>
                <h5 className="bg-success p-4 col-md-6 col-lg-3"><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> Sucess Meassage</h5>
                <h5 className="bg-warning p-4 col-md-6 col-lg-3"><FontAwesomeIcon icon={faBell}></FontAwesomeIcon> Warning Message</h5>
                <h5 className="bg-danger p-4 col-md-6 col-lg-3"><FontAwesomeIcon icon={faExclamation} className="exclamation border border-3 p-1 rounded-5"></FontAwesomeIcon> Error Message</h5>
            </div>

        </>
    );
}