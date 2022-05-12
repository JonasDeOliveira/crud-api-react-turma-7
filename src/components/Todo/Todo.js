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
    }, [])

    const getTasks = () => {
        axios.get(`${URL}`)
        .then((response) => {
            setTasks(response.data)
        })
    }

    //usando apenas um função para editar
    // const changeTask = (task, done) => {
    //     axios.put(`${URL}/${task.id}`, { ...task, done: done})
    //     .then((response) => {
    //         getTasks()
    //     })
    // }

    const editDescription = (task) => {
        if (task.description === '') {
            return
        }

        axios.put(`${URL}/${task.id}`, task)
        .then((response) => {
            getTasks()
        })
    }

    const doneTask = (task) => {
        axios.put(`${URL}/${task.id}`, { ...task, done: true})
        .then((response) => {
            getTasks()
        })
    }

    const peddingTask = (task) => {
        axios.put(`${URL}/${task.id}`, { ...task, done: false})
        .then((response) => {
            getTasks()
        })
    }

    const registerTask = (descriptionForm) => {
        let task = {
            description: descriptionForm,
            done: false
        }

        axios.post(`${URL}`, task)
        .then((response) => {
            getTasks()
        })
    }

    const deleteTask = (id) => {
        axios.delete(`${URL}/${id}`)
        .then((response) => {
            getTasks()
        })
    }

    return(
        <>
            <TodoForm register={registerTask}/>
            <TodoList tasks={tasks} 
                doneTask={doneTask}
                peddingTask={peddingTask}
                delete={deleteTask}
                editDescription={editDescription}/>
                {/* //usando apenas um função para editar */}
                {/* changeTask={changeTask}/> */}
        </>
    )
}

export default Todo