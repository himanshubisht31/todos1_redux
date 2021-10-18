

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../Redux/action'
import {v4 as uuid} from 'uuid'


export default function TodoInput() {

    const dispatch = useDispatch()

    const [title,setTitle]=useState('')

    const handleAddTodo = () => {

        const payload = {
            id:uuid(),
            title,
            status:false,
        }

    dispatch(addTask(payload));
}

    return (
        <div>

            <input type="text" placeholder='Add Task' value={title} onChange={(e)=>{setTitle(e.target.value)}} />

            <button onClick={handleAddTodo} >Add</button>
            
        </div>
    )
}
