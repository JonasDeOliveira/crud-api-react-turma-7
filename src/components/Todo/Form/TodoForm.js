import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import './TodoForm.css'
// import { taskModel } from '../../../models'

function TodoForm(props) {

    // const [task, setTask] = useState(taskModel)
    const [description, setDescription] = useState('')

    const submitEnter = (event) => {
        if (event.key === 'Enter') {
            submit()
        } else if (event.key === 'Escape') {
            setDescription('')
            // setTask(taskModel)
        }
    }

    const submit = () => {
        props.register(description)
        setDescription('')
        // setTask(taskModel)
    }

    return(
        <>
            <Container>
                <Form onSubmit={submitEnter}>
                    <Row className='row-form mb-5'>
                        <Col>
                            <Form.Group>
                                <Form.Label>Tarefa</Form.Label>
                                <Form.Control type="text" 
                                    placeholder="Digite a tarefa"
                                    onChange={event => {setDescription(event.target.value)}}
                                    value={description}
                                    onKeyUp={submitEnter}/>
                                {/* <Form.Control type="text" 
                                    placeholder="Digite a tarefa"
                                    onChange={event => {
                                        setTask({
                                            ...task,
                                            description: event.target.value})
                                    }}
                                    value={task.description}
                                    onKeyUp={submitEnter}/> */}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button className="btn-submit" variant="primary" onClick={() => submit()}>
                                cadastrar
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default TodoForm