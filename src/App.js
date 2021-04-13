import React from "react";
import ReactDOM from "react-dom";
import List from "./List/List";
import Szapka from "./Szapka/Szapka";
import Input from "./Input/Input"
import './App.css';


function App() {
 return(
  <div className="App">
  <div  className="App__som">
  <Szapka/>
 <List/>
 <Input/>
  </div>
</div>
 )
}

export default App;
