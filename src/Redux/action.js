import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionTypes"



export const addTask = (data) => {

    return {
        type: ADD_TASK,
        payload:data
    }
    
}

export const deleteTask = (id) => {
    
    return {
        type: DELETE_TASK,
        payload: id
    }

}

export const toggleTask = (id) => {
    
    return {
        type: TOGGLE_TASK,
        payload: id
    }

}