import React, {ChangeEvent, useState} from 'react';

export const FullInput = () => {
    let [value, setValue] = useState('')

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        console.log('click')
    }

    return (
        <div>
            <input type="text" onChange={onChangeInputHandler} />
            <button onClick={onClickButtonHandler}>Add</button>
            <div>{value}</div>
        </div>
    );
};

