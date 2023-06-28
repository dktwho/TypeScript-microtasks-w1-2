import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [texts, setTexts] = useState([
        {text: 'text 1'},
        {text: 'text 2'},
        {text: 'text 3'},
    ])

    let [title, setTitle] = useState('')

    const addMessage = (value: string) => {
        setMessage([{message: value}, ...message])
    }

    const addText = () => {
        setTexts([{text: title}, ...texts])
        setTitle('')
    }


    return (
        <div className="App">
            <h1>First example: button and input one file</h1>
            <FullInput addMessage={addMessage}/>
            <div>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>

            <div>
                <h1>Second example: Logic button and input apart</h1>
                <br/>
                <br/>
                <Input title={title} setTitle={setTitle}/>
                <Button name={'Add 2'} callback={addText}/>
                {texts.map((el, index) => {
                    return (
                        <div key={index}>{el.text}</div>
                    )
                })}
            </div>


        </div>
    );
}

export default App;
