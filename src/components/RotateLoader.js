import React from "react";

const RotateLoader = (props) => {
    return(
        <div className="loader col">
                <div className="lds-dual-ring"></div>
                <h1>{props.message}</h1>
        </div>
    )
}

export default RotateLoader;