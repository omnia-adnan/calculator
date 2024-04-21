import React from "react";

function DisplayContainer({ display, result, backspace}) {
    return (
        <>
        <div className="display-container">
            <div className="display">
            <div className="input-field">
            <div className="answer-field">{result}</div>
                {display || "0"}
            </div>
            </div>
            <div className="other-btns">
            <button className="colored-btn" onClick={backspace}>
                X
            </button>
            </div>
        </div>
        </>
    );
}

export default DisplayContainer;