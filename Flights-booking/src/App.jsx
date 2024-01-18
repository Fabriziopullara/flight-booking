import React from "react";
import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home";


const App = () => {
  return(
    <div>
      <Navbar/>
      <Home/>
      <Navbar/>
      <Navbar/>

    </div>
  )
}

export default App;