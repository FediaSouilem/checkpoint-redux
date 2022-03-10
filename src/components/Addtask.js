import React , { useState } from 'react'
import {useSelector, useDispatch} from "react-redux";
import { addtodo } from '../actions/CounterActions';
import { v4 as uuidv4 } from "uuid";

const Addtask = () => {
    const [input, setInput] = useState("");
    const todos = useSelector((state) => state.counterReducer.todos);
    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
      };
   
    const dispatch = useDispatch();
  return (
    <div className=''>
     
        <input type='text' 
    className='todo-input' placeholder='Add to do'  value={input} onChange={handleChange}></input>
    <button className='todo-button' onClick={()=> dispatch(addtodo({ id: uuidv4(),desc:input}))}>Add</button> 
        
    </div>
  )
}

export default Addtask