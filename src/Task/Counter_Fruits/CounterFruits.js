import React, { useState } from "react";
import "./CounterFruits.css";
import mango from './mango-img.png';
import banana from './banana-img.png';

export function CounterFruits() {
    const [count, setCount] = useState(0);
    const [bacount, setBacount] = useState(0);
    return (
        <>
            <div className="bg-warning fruitsBackGround row align-items-center p-5">
                <div className="bg-light rounded col-11 mx-auto whiteDiv p-5 rounded-5">
                    <h1 className="text-center">Bop ate <span className="text-warning">{count}</span> mangoes <span className="text-warning">{bacount}</span> bananas</h1><br />
                    <div className="row mx-auto">
                        <div className="col-5 mx-auto">
                            <img src={mango} alt="mango" className="image1 col-12" /><br /> <br />
                            <button className="AddButton bg-primary text-light rounded col-5 fs-4" onClick={() => { setCount(count + 1) }}>Eat Mango</button>
                        </div>
                        <div className="col-5">
                            <img src={banana} alt="bana" className="image1 col-12" /><br /> <br />
                            <button className="AddButton bg-primary text-light rounded col-5 fs-4" onClick={() => { setBacount(bacount + 1) }} center>Eat Banana</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}