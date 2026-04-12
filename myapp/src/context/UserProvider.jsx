import { Children, createContext, useState } from "react";

export const UserContext = createContext(null);

//Component that will provide user data to the rest of the app using React Context API
function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <UserContext.Provider value={currentUser}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;