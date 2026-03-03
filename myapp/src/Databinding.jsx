import { useState } from "react";

function Databinding() {
    const name_val = "Elston";
    

    const [fullname,setFullname] = useState(name_val); //Hook for state management
    // fullname is the state variable 
    // setFullname is the function to update the state variable
    //  useState is a hook that takes the initial value of the state variable as an argument and returns an array with two elements: the current value of the state variable and a function to update it.

    const handleclick = (e) => {
        e.target.value = "Clicked Me Successfully";
        e.target.style.backgroundColor = "green";
        alert("Welcome to ReactJS");
    }    
    

    const handletextchange = (e) => {
        setFullname(e.target.value);
    }

 
    // [+] Counter Example
    const counter = 0;
    const[count,setCount] = useState(counter);

    const handleincrement = (e) => {
        setCount(count + 1);
    }
    // [-] Counter Example

    return (
    <>
    <p>Full name  :  {fullname}</p>
    <input type="text" value={fullname} onChange={(e)=> handletextchange(e)}  />
    
    
    <input type="button" value="Click Me" onClick={(e) => handleclick(e)} />
    
    <p>Count: {count}</p>
    <input type="button" value="Increment Count" onClick={(e)=>handleincrement(e)} />
    </>
)
}

export default Databinding;