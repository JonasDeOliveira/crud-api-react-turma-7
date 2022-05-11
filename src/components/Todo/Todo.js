import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoForm from './Form/TodoForm'
import TodoList from './List/TodoList'
import { baseUrl } from '../../environments'

function Todo(props) {

    const URL = `${baseUrl}/todo`
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks()
    },[])

    const getTasks = () => {
        axios.get(`${URL}`)
        .then((response) => {
            setTasks(response.data)
        })
    }

    const registerTask = (descriptionForm) => {
        axios.post(`${URL}`, { description: descriptionForm, status: false })
        .then((response) => {
            getTasks()
        })
    }

    return(
        <>
            <TodoForm register={registerTask}/>
            <TodoList tasks={tasks}/>
        </>
    )
}

export default Todo