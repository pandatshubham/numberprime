import React,{useState} from "react";


export default function Textform(Props) {
    const[text,setText] =useState("Enter tour Text Please");

    const handleOnChange =(event) =>{
        setText(event.target.value);
    }
    const handleUpperCase =() =>{
        let newText = text.toUpperCase()
        setText(newText)
       Props.showAlert('success','UpperCase mode enebled')
    }
    const handleLowerCase =() =>{
        let newText = text.toLowerCase()
        setText(newText)
        Props.showAlert('success','Lowercase mode enebled')
    }
    const handleOnTrim =() =>{
      let newText = text.trim()
      setText(newText)
      Props.showAlert('danger','space  mode enebled')
    }
    const handleFirstLetterCapital =() =>{
      let textArr = text.split(" ")
      let Capital;
      let temp="";
      for (let i=0; i<textArr.length;i++){
        Capital=textArr[i].charAt(0).toUpperCase()+textArr[i].slice(1)
        temp+=Capital+"";
      }
      setText(temp.trim())
      Props.showAlert('primary','capital letter mode enebled')
    }
    const handleClearText=() =>{
      setText("")
      Props.showAlert('warning','ClearText mode enebled')
    }
  return (
    <div className='p-5' style={{backgroundColor:Props.mode === 'light'?'white':'black',color:Props.mode ==='light'?'black':'white'}}>

      <div className="mb-3">
        <h1>ENTER YOUR TEXT</h1>
  <textarea value={text} onChange={handleOnChange} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
  
</div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>change to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>change to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleOnTrim}>RemoveSpace</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>ClearText</button>
        <button className="btn btn-primary mx-2" onClick={handleFirstLetterCapital}>FirstletterCapital</button>
        <div className="p-2">

          <h2>Your text Summary</h2>
          <p>{text.split(" ").length-1}Words and {text.length}Character</p>
        </div>
        <h2>preview Text</h2>
        <p>{text}</p>
    </div>
  )
}
