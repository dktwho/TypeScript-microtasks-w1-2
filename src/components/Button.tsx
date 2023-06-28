import React from 'react';

export type ButtonPropsType = {
    name: string;
    callback: () => void
}

export const Button = ({name, callback}: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        callback()
    }
    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};

