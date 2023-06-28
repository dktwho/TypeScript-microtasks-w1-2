import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    addMessage: (value: string) => void
}

export const FullInput = ({addMessage}: FullInputType) => {
    let [value, setValue] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        addMessage(value)
    }


    // const onClickButtonHandler = () => {
    //     console.log('click')
    // }

    return (
        <div>
            <input type="text" onChange={onChangeInputHandler} value={value}/>
            <button onClick={onClickButtonHandler}>Add</button>
        </div>
    );
};

