import React from "react";
import "../styles/index.css";


const LoadingData = () => {
    return (
        <h4 data-testid={'loading-indicator'} className={"loading-indicator"}>Loading users, please wait...</h4>
    )
}

export default LoadingData;