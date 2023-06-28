import React from 'react';
import styled from "./OnOff.module.css";


type ButtonStatusType = {
    status: boolean
}
export const OnOff = ({status}: ButtonStatusType) => {
    return (
        <div className={styled.indicatorOnOff}>
            <button className={status ? `${styled.buttonOn}`: `${styled.button}`}>On</button>
            <button className={!status ? `${styled.buttonOff}`: `${styled.button}`}>Off</button>
            <div className={status ? `${styled.indicatorOn}` : `${styled.indicatorOff}` }></div>
        </div>
    );
};

