import React, { useState } from 'react'
import TodoForm from './Form/TodoForm'
import TodoList from './List/TodoList'

function Todo(props) {

    return(
        <>
            <TodoForm/>
            <TodoList/>
        </>
    )
}

export default Todo