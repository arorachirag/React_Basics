
import React,{useState} from 'react';

export default function Textform(props) {
    

    const toggle = ()=>{
        if(mystyle.color === 'white'){
            setStyle({
                
                    backgroundColor : 'white',
                    color:'black'
                
            })
            setbtntext("Enable Dark Mode");
        } else {
            setStyle({
                
                backgroundColor : 'black',
                color:'white'
            
        })
        setbtntext("Enable Light Mode");
        }
    }
    
    const upper = ()=>{
        console.log("Upper text");
        setText(text1.toUpperCase());
    }

    const lower = ()=>{
        console.log("Lower text");
        setText(text1.toLowerCase());
    }

    const handle=(event)=>{
        
        setText(event.target.value);
    }

    const [text1 ,setText] = useState("");
    const[mystyle , setStyle] = useState({
        backgroundColor : 'white',
        color:'black'
    });
    const[btntext,setbtntext] = useState("Night Mode");
    return (
    
    <div className="mb-3" style={mystyle} >
        <h1>{props.title}</h1>
        <textarea className="form-control" value={text1} onChange={handle} id="box" rows="8"></textarea>
        <button className="btn btn-primary my-3" onClick={upper} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={lower} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={toggle} >{btntext}</button>
        <h2>Word Count</h2>
        <p>There are {text1.split(" ").filter((a1)=>{return a1.length!==0}).length} and {text1.length} characters</p>
        <h2>Preview</h2>
        <p>{text1}</p>
    </div>

  )
}
