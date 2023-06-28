import React, {useState} from 'react';

export const FullInput = () => {
    let [value, setValue] = useState('')

    const inputValue = (e:any) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={inputValue}/>
            <button>Add</button>

        </div>
    );
};

