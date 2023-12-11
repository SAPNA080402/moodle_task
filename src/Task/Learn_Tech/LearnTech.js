import React from "react";
import './LearnTech.css';
import dataScientist from '../Learn_Tech/data-scientist-img.png';
import iotDeveloper from '../Learn_Tech/iot-developer-img.png';
import vrDeveloper from '../Learn_Tech/vr-developer-img.png';
import mlEngineer from '../Learn_Tech/ml-engineer-img.png';

export function LearnTech() {
    return (
        <div className="blue_back p-5 text-center container-fluid lh-lg fs-5 row">
            <h1 className="fw-bolder">Learn 4.0 Technologies</h1>
            <p className="col-8 mx-auto">Get trained by alumini of NTs and top companies like Amazon, Microsoft, Intel, Nividia, Qualcomm, etc. Learndirectly from professionals involved in Product Development.</p>
            <div className="row gap-5 column-gap-2 justify-content-evenly mx-auto">
                <div className="col-md-5 p-2 borderColor border-top border-5 border-danger-subtle rounded-4 bg-light">
                    <h2>Data Scientist</h2>
                    <p className="text-start p-2">Data Scientists gather and analyze large sets of structured and unstructured data.</p>
                    <img src={dataScientist} className="learnImg float-end" />
                </div>
                <div className="col-md-5 p-2 borderColor border-top border-5 border-info-subtle rounded-4 bg-light">
                    <h2>IOT Developer</h2>
                    <p className="text-start p-2">IoT Developers are professionals who can develop, manage, and monitor IoT devices.</p>
                    <img src={iotDeveloper} className="learnImg float-end" />
                </div>
                <div className="col-md-5 p-2 borderColor border-top border-5 border-success-subtle rounded-4 bg-light">
                    <h2>VR Developer</h2>
                    <p className="text-start p-2">A VR Developer creates completely new digital environments that people can use.</p>
                    <img src={vrDeveloper} className="learnImg float-end" />
                </div>
                <div className="col-md-5 p-2 borderColor border-top border-5 border-warning-subtle rounded-4 bg-light">
                    <h2>ML Engineer</h2>
                    <p className="text-start p-2">Machine Learning engineers Fedd data into modals defined by data scientist</p>
                    <img src={mlEngineer} className="learnImg float-end" />
                </div>
            </div>
        </div>
    );
}