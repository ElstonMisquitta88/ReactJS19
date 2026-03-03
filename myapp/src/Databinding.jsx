import { useEffect, useState,useRef } from "react";

function Databinding() {
    const name_val = "Elston";
    const [fullname,setFullname] = useState(name_val); //Hook for state management
    // fullname is the state variable 
    // setFullname is the function to update the state variable
    //  useState is a hook that takes the initial value of the state variable as an argument and returns an array with two elements: the current value of the state variable and a function to update it.


    
    const addressRef=useRef();
 



    const handleclick = (e) => {
        e.target.value = "Clicked Me Successfully";
        e.target.style.backgroundColor = "green";
       
        addressRef.current.value = "123 Main St, Cityville";
        addressRef.current.style.backgroundColor = "yellow";

    }    
    

    const handletextchange = (e) => {
        setFullname(e.target.value);
    }

 
    // [+] Counter Example
    const counter = 0;
    const[count,setCount] = useState(counter);

    const handleincrement = () => {
         setCount(prev => prev + 1);
        //Because state updates in React are asynchronous.
        //Using prev guarantees correct value.
    }
    // [-] Counter Example

    useEffect(() => {
    console.log("Mounted");

    return () => {
        console.log("Cleanup before next effect or unmount");
     };
    }); // Dependency array: effect runs when 'count' changes

    // This will run after every render (initial and updates)

    return (
    <>
    <p>Full name  :  {fullname}</p>
    <input type="text" value={fullname} onChange={(e)=> handletextchange(e)}  />
    
    
    <input type="button" value="Click Me" onClick={(e) => handleclick(e)} />
    
    <p>Count: {count}</p>
    <input type="button" value="Increment Count" onClick={handleincrement} />
   
    <br /><br /><br /> 
   
    <span>Enter Address : </span>  <input type="text" ref={addressRef} />
 
    </>

     
)
}

export default Databinding;