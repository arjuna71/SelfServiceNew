import React,{useState} from "react";
import './../index.css'


const ButtonGroup = ({button, doSomethingAfterClick}) =>{
    const [clickedId, setClickedId] = useState(-1);
    const handleClick = (event, i) =>{
        alert('button clicked ' + i)
        setClickedId(i);
        console.log(clickedId);
        doSomethingAfterClick(event);
    }
    return(
        <>
            {button.map((buttonLabel, i) => (
                <button
                key={i}
                aria-label={buttonLabel}
                name={buttonLabel}
                id={i}
                onClick={(event)=> {handleClick(event, i)}}
                className={i=== clickedId ? "customButton active" : "customButton" }
                >{buttonLabel}</button>
            ))}
        </>
    );
}

export default ButtonGroup

