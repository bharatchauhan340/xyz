import { useState } from "react";
import './Attendance.css';

const Attendance=(props)=>{

    const [inputt, setInputt] = useState({
        
    });

    const handlechange =(e) =>{
        const name=e.target.name;
        const value=e.target.value;
        setInputt({
            ...inputt, [name]:value 
            
        });
    }

    const handleout =(e) =>{
        e.preventDefault();
        const name=e.target.name;
        const value=e.target.value;
        props.temp(inputt);
    }

    const submithandler =(e) =>{
        e.preventDefault();
        props.func(inputt);
        const date=Date().toLocaleString().substring(16).substring(0,5);
        
        alert("Student Check-in Successfully at  " + date );
        props.changeCount(props.cntr+1);
        setInputt({});
    }
    return<>
    <div id="main-div">
        <form id="sub-div">
            <label>Enter Name  : 
                <div id="input">
                <input name="namee" type="text" value={inputt.namee || ""} onChange={handlechange}  />
                </div>
            </label>
            <br/>
            <label>Enter Roll No  : 
            <div id="input">
                <input name="rollno" type="text" value={inputt.rollno || ""} onChange={handlechange}  />
                </div>
            </label>
            <br/>
            
             <label id="input">Current Time  :  {Date().toLocaleString().substring(16).substring(0,5)} </label> 
            <br/>
            <button name="checkin" value={Date().toLocaleString().substring(16).substring(0,5) || ""} onClick={submithandler} id="button"> Checkin </button>
            <button name="checkout" value={Date().toLocaleString().substring(16).substring(0,5) || ""} onClick={handleout} id="button" > Checkout </button>
            
        </form>
        </div>
    </>
};
export default Attendance;