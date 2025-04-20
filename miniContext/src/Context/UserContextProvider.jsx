import React, { useState }  from "React"

import UserContext from './UserContext';
const UserContextProvider = ({childern})=>{
    const [user, setUser] = useState
    return (
            <UserContext.Provider value={{user,setUser}}>
            {childern}
            </UserContext.Provider>
    )
}
export default UserContextProvider;
