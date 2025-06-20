
import React from "react";
import './../styles/App.css';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
const App = () => {
  let {isAuthenticated,setIsAuthenticated} = useContext(AuthContext)
  
  return (

    <div>
       <h1>Click on the Checkbox to get Authenticated</h1>
       <p className="authText">
        {isAuthenticated
          ? "You are authenticated"
          : "You are not authenticated"}
      </p>
    <input type="checkbox" name="checkbox" id="AuthToggle" onChange={(e)=>{
      setIsAuthenticated(e.target.checked)
    }} />
    <label>I'm not a robot</label>
    
    </div>
  )
}

export default App
