import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Fake() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(data => data.json())
            // .then(json => console.log(json))
            .then(putProduct => setProduct(putProduct))
    })
    return (
        <>
            <h1 className="text-center">Products</h1>
            <div className="row gap-5 mx-auto">{
                product.map((value, index) => (
                    <>
                        <div className="border border-2 rounded-2  col-11 col-md-5 mx-auto d-flex">
                            <img src={value.image} className="col-6 p-2" />
                            <div className="col-6 p-2">
                                <h5>{value.title}</h5>
                                <p><b>&#8377; </b>{value.price}</p>
                                <Link to={`/fake2/${value.id}`} className="btn btn-primary">view</Link>
                            </div>
                        </div >
                    </>
                ))
            }
            </div >
        </>
    );
}
