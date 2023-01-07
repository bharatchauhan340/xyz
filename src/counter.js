import { useState } from "react";
import './counter.css';
import Tablee from "./table";

const Counter =(props) =>{

     const [cnt, setCnt] = useState(0);

     const [isopen, setIsopen] = useState(false);

     function refresh() {
        setCnt(props.fun());
        setIsopen(true);
     } 

    console.log("munna");
    console.log(props.arr);

    return<>
    <div id="maindiv">
        <h3> Total students at this moment are : {cnt}
        <br/>
        <button onClick={refresh}> Refresh </button>
        </h3>
        </div>
        {
            isopen?(<Tablee data={props.arr}/>):(<> </>)
        }

    </>
};
export default Counter;