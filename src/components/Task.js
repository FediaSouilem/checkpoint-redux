import React, {useState} from 'react'
import {deletetodo, edittodo, savetodo} from '../actions/CounterActions';
import {useDispatch} from "react-redux";



const Task = ({task}) => {
const dispatch = useDispatch(); 
const [input, setInput] = useState("");
const [showEdit, setShowEdit] = useState(false);
const handleChange = (e) => {
  setInput(e.target.value);
  setShowEdit(!showEdit);
};  
 
  return (
    <div className='todo-form'>
         
          <p>{task.desc}</p>

          <button className='todo-button' onClick={(e) => {
            dispatch(deletetodo(task));
          }}>Delete
          </button>

           <button
            className="todo-button edit"
            onClick={(e) => {
              dispatch(savetodo({ id: task.id, newTask: input }));
              setShowEdit(!showEdit);
            }}
          >
            Update
          </button>
          
          <input
          className="todo-input edit"
            placeholder={task.desc}
            value={input}
            onChange={handleChange}
             
          />
           <button
            className="todo-button edit"
            onClick={(e) => {
              dispatch(edittodo({ id: task.id, newTask: input }));
              setShowEdit(!showEdit); }}
          >
            Save
          </button>
           
    </div>
    
  )
}

export default Task;