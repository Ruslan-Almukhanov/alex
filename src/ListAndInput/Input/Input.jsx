import React , { createRef} from "react";
import '../Input/Input.css';



const Input = (props) =>{
  let postFromInput = createRef();
  let tasks = ()=> {
    let text = postFromInput.current.value;
    props.newPosts(text)
    postFromInput.current.value='';
     
  }
    return(
        <div className="div__input">
          <input className="div__input_i" ref={postFromInput}></input>
          <button className="div__input_button" onClick={tasks}>add</button>
        </div>
       
    )
}

export default Input;