import React, { useState } from 'react'

export default function TextForm(props) {

    const handelUpClick = () =>{
        console.log("on lick button working" + text);
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("converted to upeer case","success")
    }

    const handleCopy = () => {
        var text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("copyied to clickbord","success")
    }

    const handelDownClick = () =>{
        console.log("on lick button working" + text);
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("converted to lower case","success")
    }
    const handelOnChange = (event) =>{
        console.log("HANDEL ON CHANGE");
        setText(event.target.value)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const [text, setText] = useState('');

    const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
        props.showAlert("Extra Spaces Removed","success")
    }

    const handleClearMsgbox = ()=>{
        setText('');
        props.showAlert("Text Box Cleared.","success");
    }

  return (
    
    <>  
        <div className='container' style={{color:props.mode=== 'dark'?'white': 'black'}}>
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor : props.mode ==='dark'?'#424951':'white', color :props.mode ==='dark'?'white':'#424951' }} id="textBox" rows="12"></textarea>
        </div>

            <div className='my-3'>
                <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>Convert To UppersCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelDownClick}>Convert To LowerCase</button>
                <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-1 my-1">Speak</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearMsgbox}>Clear Text Area</button>
            </div>
        </div>

        <div className="container" style={{color:props.mode=== 'dark'?'white': 'black'}}>
            <h1> Information about your text:</h1>
            <p>Your text has {text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.length} characters</p>
            <p>Time required to read above text {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} min</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
