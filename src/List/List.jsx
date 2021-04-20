import React from "react";
import '../List/List.css';


const List = (props) =>{
    let newTasks = 
    props.dataTasks.map((el) =>{
       return(  
        <li className="list__ul_li">{el.post}</li>
    )
    })
    return(
        <div>
            <ul className="list__ul">
                {newTasks}
            </ul>
        </div>
    )
  }
  
  export default List;