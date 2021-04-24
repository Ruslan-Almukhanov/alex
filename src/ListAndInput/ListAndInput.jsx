import React , { useState } from "react";
import Input from './Input/Input';
import List from './List/List'
import './ListAndInput.css';


const ListAndInput = (props) =>{
    // const dataTasks = 
    // [
    //     {id: 1 , post:'Hello, world!' },
    //     {id: 2 , post:'How are you?' },
    //     {id: 3 , post:'Hey , baby!'},
    //     {id: 4 , post:'Where my react?'},
    // ]

    const [data, setData] = useState(  [
        {id: 1 , post:'Hello, world!' },
        {id: 2 , post:'How are you?' },
        {id: 3 , post:'Hey , baby!'},
        {id: 4 , post:'Where my react?'},
    ]);
   let newPosts = (newPosting) =>{
    let newPost = {
         id:5,
         post: newPosting,
     };
     setData(data =>[...data , newPost])
 }


    
    return(
        <div className="listandinput">
            <List dataTasks={data}/>
            <Input newPosts={newPosts}/>
        </div>
    )
}

export default ListAndInput;