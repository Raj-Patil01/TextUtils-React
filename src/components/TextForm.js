import React, { useState } from 'react'


export default function TextForm(props) {
// converted into uppercase
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
// converted into lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
// Clear text
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text is cleared!", "success")
    }
    const handleOnChange = (event) => {
        // console.log("Handle on change");
        setText(event.target.value);
    }

// Copy text
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard!", "success")
    }

// remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed some extra spaces!", "success")
    }

    const [text, setText] = useState('Enter text here');
    // text = "Raj"  // wrong way to change the state
        // we can't update state as normal variable (text = "Raj")
        // we have to use update function which is specify as setText in this case
    // setText("Raj");  // correct way to change the state
    return (
        <>
        <div className='container' style={{color: props.mode=== 'dark'? 'white': 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'? 'gray': 'white', color: props.mode=== 'dark'? 'white': 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode=== 'dark'? 'white': 'black'}}>
            <h2>Your text summary</h2>
            <b><p>{text.split(" ").length} words and {text.length} characters</p></b>
            <p>{0.008 * text.split(" ").length} Minutes read</p>

            <h2>Preview</h2>
            <p>{text.length>0 ? text:"Enter something in the text box above to preview it here"}</p>
        </div>
        </>
    )
}









