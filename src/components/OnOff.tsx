import React from 'react';
import styled from "./OnOff.module.css";


type ButtonStatusType = {
    status: boolean;
    toggleIndicator: () => void;
    indicatorOff: () => void
    indicatorOn: () => void
}
export const OnOff = ({status, toggleIndicator, indicatorOff, indicatorOn}: ButtonStatusType) => {

    return (
        <div className={styled.indicatorOnOff}>
            <button onClick={() => indicatorOn()} className={status ? `${styled.buttonOn}` : `${styled.button}`}>On
            </button>
            <button onClick={() => indicatorOff()}
                    className={!status ? `${styled.buttonOff}` : `${styled.button}`}>Off
            </button>
            <div onClick={() => toggleIndicator()}
                 className={status ? `${styled.indicatorOn}` : `${styled.indicatorOff}`}></div>
        </div>
    );
};

