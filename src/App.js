import React from "react";
import Szapka from "./Szapka/Szapka";
import ListAndInput from './ListAndInput/ListAndInput';
import './App.css';

// please dont pay attention to my design
function App(props) {
 return(
  <div className="App">
  <div  className="App__som">
  <Szapka/>
    <div>
      <ListAndInput/>;
    </div>
  </div>
</div>
 )
}

export default App;
