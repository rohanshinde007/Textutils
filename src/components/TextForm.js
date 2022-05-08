import React, { useState } from 'react'

export default function TextForm(props) {
      // Declare a new state variable, which we'll call "count"

  const handleUpClick = () =>{
      let newText = text.toUpperCase();
      setText(newText);
  }

  const handleOnChange = (event) =>{
      setText(event.target.value);

  }

  const handledoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
  }

  const handleCLClick = () =>{
      setText("");
  }


  const handleClick = () =>{
    let arr = text.split(" ");
    for(var i = 0; i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    let c2 =arr.join(" ")
    setText(c2);
  }


  const handleTlClick = () =>{
    let newText = text.charAt(0).toUpperCase()+text.substring(1).toLowerCase();
      setText(newText);
  }

  const [text, setText] = useState("");
//   text = "new text"; // this is hte wrong way to declare the the text beaucause you can use the state. 

//   settext("Write somthing hare") // this is hte correct way to declare the the text beaucause you can use the state. 
  return (
    <>
    <div className='container' style={{color:(props.mode==='light'?'black':'white')}}>
        <h1>{props.heading}</h1>
    
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'gray'}} rows="8" value={text} onChange={handleOnChange} placeholder='Enter a text Hare'></textarea>
  <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Upercase</button>
  <button className="btn btn-primary  my-3" onClick={handledoClick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-3" onClick={handleCLClick}>Clear all</button>
  <button className="btn btn-primary mx-3" onClick={handleTlClick}>Title case</button>
  <button className="btn btn-primary mx-3" onClick={handleClick}>capitalise text</button>
</div>
    </div>
    <div className="container my-2" style={{color:(props.mode==='light'?'black':'white')}}>
      <h2>Your text Summery</h2>
      <p> {text.split(" ").length} words and {text.length} charactors</p>

      <p> {0.009*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somthing to Privew it hare"}</p>
    </div>

    </>
  )
}
