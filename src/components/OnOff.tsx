import React, {useState} from 'react';
import styled from "./OnOff.module.css";

export const OnOff = () => {
    let [indicator, setIndicator] = useState(false)

    const toggleIndicator = () => {
        setIndicator(!indicator)
    }

    const indicatorOff = () => {
        setIndicator(false)
    }

    const indicatorOn = () => {
        setIndicator(true)
    }

    return (
        <div className={styled.indicatorOnOff}>
            <button onClick={() => indicatorOn()} className={indicator ? `${styled.buttonOn}` : `${styled.button}`}>On
            </button>
            <button onClick={() => indicatorOff()}
                    className={!indicator ? `${styled.buttonOff}` : `${styled.button}`}>Off
            </button>
            <div onClick={() => toggleIndicator()}
                 className={indicator ? `${styled.indicatorOn}` : `${styled.indicatorOff}`}></div>
        </div>
    );
};

