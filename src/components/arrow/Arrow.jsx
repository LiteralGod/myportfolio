import React from "react";
import "./arrow.css"
import CURVEDARROW from "../../assets/curvedarrow.png"


const Arrow = () => {

    return(


        <div className="arrow__container">
            <img src={CURVEDARROW} alt="curved arrow image" className="arrow" />
        </div>
    )

}

export default Arrow