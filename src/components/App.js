
import React from "react";
import './../styles/App.css';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
const App = () => {
  let {isAuthenticated,setIsAuthenticated} = useContext(AuthContext)
  
  return (

    <div>
       <h1>Click on the Checkbox to get Authenticated</h1>
       <p>{isAuthenticated==true?"you are now authenticate, you can processd,":"you are not authenticate"}</p>
    <input type="checkbox" name="checkbox" onClick={(e)=>{
      setIsAuthenticated(e.target.checked)
    }} />
    <label>I'm not a robot</label>
    
    </div>
  )
}

export default App
