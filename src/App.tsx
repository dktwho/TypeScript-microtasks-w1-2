import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./components/FullInput";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (value: string) => {
        console.log(value)
        // let newMessage = {message: 'message4'}
        let newMessage = {message: value}
        setMessage([newMessage, ...message])

    }


    return (
        <div className="App">
            {/*<div>*/}
            {/*  <input type="text"/>*/}
            {/*  <button>Add</button>*/}
            {/*</div>*/}
            <FullInput addMessage={addMessage}/>
            <div>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
