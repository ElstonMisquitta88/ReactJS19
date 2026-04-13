import { Children, createContext, useState } from "react";


//(1) Create the Context
export const UserContext = createContext(null); 
// Think of this as creating an empty box that we can put data in and share it across our app. 
//  The "null" means that the box starts off empty.


//(2) Create the Provider Component                                                
// The Provider Component
// This is a wrapper component -- children = whatever components you wrap inside it

function UserProvider({ children }) {

    //(3) State to hold the current user information. Initially, it's set to null, meaning no user is logged in.
    const [currentUser, setCurrentUser] = useState(null);

    return (
        // (4) The Provider component that wraps around the children components. 
        //  It provides the currentUser value to any component that consumes this context.
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider; 