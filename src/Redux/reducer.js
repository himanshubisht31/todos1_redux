import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actionTypes";


const initState = {
    todos: [
        {
            id: 1,
            title: "Learn Redux",
            status: false
        }
    ]
};

export default function reducer(state=initState,{type,payload}) {
  
switch (type) {
    case ADD_TASK:
        return {
            ...state,
            todos:[...state.todos,payload]
        }

    case TOGGLE_TASK:
       
        return {
            ...state,
        todos:[...state.todos.map(ele=>ele.id===payload?({...ele,status:!ele.status}):ele)]
        }
    
    case DELETE_TASK:
        return {
            ...state,
            todos:[...state.todos.filter(ele=>ele.id!==payload)]
        }
        
       

    default:
        return {...state};
}


}
