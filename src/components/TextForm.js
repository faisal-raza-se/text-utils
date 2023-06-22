import React, {useState} from 'react'

export default function TextForm(props){
    const handleLowerClick = () =>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState("");
    // setText("New Text");
    return(
        <>
        <div className='container' style={{color:(props.mode==='dark'?'white':'black') }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{backgroundColor:(props.mode==='dark'?'grey':'light'), color : props.mode === 'dark' ? 'white' : 'black'}} 
                    id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Covert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter somthing in the text area to preview"}</p>
        </div>
        </>
    )
}