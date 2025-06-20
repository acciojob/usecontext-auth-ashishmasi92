import React, { useState } from "react"
import { createContext } from "react"
export let AuthContext = createContext()



const Auth = ({children})=>{
let [isAuthenticated,setIsAuthenticated] = useState(false)

    return (
        <>
       <AuthContext.Provider value={{
        isAuthenticated,setIsAuthenticated
       }}>
{children}
       </AuthContext.Provider>
       
        </>
    )
}

export default Auth