import React,{useState} from 'react'


export default function Textform(props) {
    
    const handleUpClick = () =>{
        const text1 = text.toLocaleUpperCase();
        setText(text1);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick = () =>{
        const text1 = text.toLowerCase();
        setText(text1);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearText = () =>{
        const text1 = "";
        setText(text1);
        props.showAlert("Text Cleared Successfully","success");
    }
    const handleCopyText = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied Successfully","success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Spaces Cleared Successfully","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    // var wordSize = text.split(' ').length;
    // if(text === ''){
    //     wordSize = 0;
    // }else{
    //     wordSize = text.split(' ').length;
    // }
    return (
        <>     
           
            <div className='container' style={props.style}> 
                <div className="mb-3">
                    <h3>{props.heading}</h3>
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={props.style} onChange={handleOnChange} value = {text} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyText}>Copy Text</button>
                
            </div>  
            <div className="container"style={props.style} >
                    <h3>Your text Summary:</h3>
                    <p>Your text contains {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</p>
                    <p >{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length  * 0.008} Minuts to read your text</p>
                    <h3>Preview:</h3>
                    <div style ={{textOverflow: 'ellipsis',overflow:'hidden'}}>
                    <p >{text.length>0 ? text:"Enter something in the textbox above to preview it here"}</p>
                    </div>
            </div>
        </>
    )
}
