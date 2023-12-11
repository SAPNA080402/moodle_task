import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import './FakeData.css';
// import { Rate } from "antd";

export function Details() {
    const [details, setDetails] = useState([]);
    const [rate, setRate] = useState([]);
    var { id } = useParams();
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then(res => res.json())
            .then(date => setDetails(date))
        // .then(data => setDetails(data))
    })
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then(res => res.json())
            .then(date => setRate(date.rating))
        // .then(data => setDetails(data))
    })
    return (
        <>
            <div className="mx-auto p-5">
                <marquee><h2 className="text-uppercase text-success">{details.category}</h2></marquee>
                <h1 className="p-5">{details.title}</h1>
                <div className="row border border-3">
                    <img src={details.image} className="col-11 col-md-4 p-5 imageHeight" />
                    <div className="col-md-8 border-start border-3 p-5 d-flex flex-column justify-content-center">
                        <h3>{details.description}</h3>
                        <div className="d-flex">
                            <h4>Rating :</h4> <Rating initialRating={rate.rate} readonly></Rating>
                        </div>
                        <div className="d-flex">
                            <h3>Number of happy customers: {rate.count}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
