import { v4 as uuidv4 } from 'uuid';
const initialState = {todos: [
    {
        id:uuidv4(),
        description:'',
        isDone: false,  
    },
   
]};


const conterReducer =(state=initialState,action)=> {
    let newState ;
    switch (action.type) {
        case "ADDTODO": 
        return { todos: [...state.todos, action.payload] };
        case "DELETETODO": 
        
        newState = state.todos.filter((todo) => todo.id !== action.payload.id);
            return {todos: newState};
        case "SAVETODO":
            return  { todos: [...state.todos] };
        
        case "EDITTODO": 
        newState = [...state.todos];
        const index = newState.findIndex((elem) => elem.id === action.payload.id);
        newState[index].task = action.payload.newTask;
        return{todos: newState}
        default:
        return state;
       
    }
    
}
export default conterReducer