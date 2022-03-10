import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { addtodo,deletetodo} from '../actions/CounterActions';
import Addtask from "./Addtask";
import Task from "./Task";



const Listtask = () => {
    // const dispatch = useDispatch();
    const tasks = useSelector(state => state);
    const todos = useSelector((state) => state.counterReducer.todos);
    console.log("todos",todos)
   
  return (
    <div>
        <h1>To do list</h1>
        <Addtask />
        {todos.map((todo, index) => (
        <Task task={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default Listtask