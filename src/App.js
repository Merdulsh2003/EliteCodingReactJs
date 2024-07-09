import "./App.css";
import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Topcourses from "./pages/Topcourses";
import Login from "./pages/Login";
import { useState } from "react";
import PrivateRoute from "./pages/PrivateRoute"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
   
    <div className="w-screen  bg-richblack-900 flex flex-col">
      <Routes>
         <Route path="/" element = {<Home />} /> 
          
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="/top" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
           < Topcourses/>
          </PrivateRoute>
        } />
      </Routes>
      </div>
   
  );
}

export default App;
