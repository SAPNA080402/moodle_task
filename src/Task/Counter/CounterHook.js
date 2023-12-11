import React, { useState } from "react";

export function CounterHook() {
    const [count, setCount] = useState(0)
    if (count < 0) {
        document.getElementById("btn2").disabled = true;
    }
    if (count >= 50) {
        document.getElementById("btn1").disabled = true;
    }
    if (count < 50 && count != 0) {
        document.getElementById("btn1").disabled = false;
    }
    if (count > 0) {
        document.getElementById("btn2").disabled = false;
    }
    function resetFun() {
        document.getElementById("btn1").disabled = false;
        document.getElementById("btn2").disabled = false;
        setCount(0);
    }
    return (
        <>
            <div className="row gap-5 p-5">
                <h1 className="col-2">{count}</h1>
                <button id="btn1" onClick={() => { setCount(count + 1) }} className="col-2">ADD</button>
                <button id='btn2' onClick={() => { setCount(count - 1) }} className="col-2">SUB</button>
                <button onClick={resetFun} className="col-2">Reset</button>
            </div>
        </>
    );
}
