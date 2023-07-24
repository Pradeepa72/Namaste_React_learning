import { useEffect, useState } from "react";

const Profile = (props) =>{
    const [Count,setCount] = useState(0);
    useEffect(()=>{

        const timer = setInterval   (()=>{
            console.log("NAMASTE REACT OP");
        },1000);
       console.log("useeffect returns");

       return()=>{
        clearInterval(timer);
        console.log("usdeeffect returns");
       };
    },[]);
    console.log("render");
    return(
        <div>
            <h2>Profile component</h2>
            <h3>name:{"pradeepa p k"}</h3>
            <h3>Count :{Count}</h3>
            <button onClick={()=>{
                setCount(1);
             } }>Count</button>
        </div>
    );
}; 
export default Profile;