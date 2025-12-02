import {useState, useEffect, useRef} from "react";
function Users(){
    const [inputValue, setinputValue]= useRef("");
    const perivousInputValue = useRef("");
    useEffect(()=>{
        perivousInputValue.current= inputValue;},[inputValue]
    );
    return(
        <>
            <input
             type="text"
             value={inputValue}
             onChange={(e)=> setinputValue(e.target.value)}/>

            <h2>current value: {inputValue}</h2>
            <h2>previous value: {perivousInputValue.current}</h2>
        
        </>
    );
    
}
export default Users;