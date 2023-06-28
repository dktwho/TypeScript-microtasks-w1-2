import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string;
    setTitle: (inputValue: string) => void
}

export const Input = ({title, setTitle}: InputPropsType) => {

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <input type="text" value={title} onChange={onChangeInput} />
    );
};

