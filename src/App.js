import React from "react";
import List from "./List/List";
import Szapka from "./Szapka/Szapka";
import Input from "./Input/Input";
import dataTasks from './redux/state';
import {newPosts} from './redux/state'
import './App.css';

// please dont pay attention to my design
function App(props) {
 return(
  <div className="App">
  <div  className="App__som">
  <Szapka/>
 <List dataTasks={dataTasks} />
 <Input newPosts={newPosts}/>
  </div>
</div>
 )
}

export default App;
