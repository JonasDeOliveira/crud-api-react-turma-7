import React, { useState } from 'react'
import './TodoList.css'
import { AiFillCheckCircle } from "react-icons/ai";
import { Container, ListGroup, Row, 
        Col, Button, Modal, 
        Alert, Form } from 'react-bootstrap'

function TodoList(props) {

    const tasks = props.tasks || []
    const [task, setTask] = useState({});
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const taskDone = (task) => {
        return (
            <Button variant={task.done ? 'success' : 'info'}
                onClick={() => { task.done ? props.peddingTask(task) : props.doneTask(task) }}>
                {task.done ? 'Concluído' : 'Concluir'}
            </Button>
        )
    }

    //usando apenas um função para editar
    // const taskDone = (task) => {
    //     return (
    //         <Button variant={task.done ? 'success' : 'info'}
    //             onClick={() => { task.done ? props.changeTask(task, false) : props.changeTask(task, true)}}>
    //             { task.done ? 'Concluído' : 'Concluir' }
    //         </Button>
    //     )
    // }

    //usando if e else if para retornar botões
    // const taskDone = (task) => {
    //     if (task.done === true) {
    //         return (
    //             <Button variant='success'
    //                 onClick={() => { props.peddingTask(task)}}>
    //                 Concluído
    //             </Button>
    //         )
    //     } else if (task.done === false) {
    //         return (
    //             <Button variant='info'
    //                 onClick={() => { props.doneTask(task)}}>
    //                 Concluir
    //             </Button>
    //         )
    //     }
    // }

    const renderTask = () => {
        return tasks.map((item) => {
            return (
                <ListGroup.Item key={item.id}>
                    <Row className="itemTask">
                        <Col xs={6} md={8}>
                            {item.description}
                        </Col>
                        <Col>
                            {taskDone(item)}
                            <Button className="mx-3" variant="secondary"
                                onClick={() => {
                                    setTask(item)
                                    handleShowEdit()
                                }}>
                                Editar
                            </Button>
                            <Button className="mx-3" variant="danger"
                                onClick={() => {
                                    setTask(item)
                                    handleShow()
                                }}>
                                Deletar
                            </Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            )
        })
    }

    return (
        <Container>
            {
                successDelete
                    ?
                    <Alert key='success' variant='success'>
                        <AiFillCheckCircle size="30" /> Item apagado com suceso
                    </Alert>
                    :
                    ''
            }

            <Row>
                <Col>
                    <ListGroup variant="flush">
                        {renderTask()}
                    </ListGroup>
                </Col>
            </Row>

            {/* //modal edit */}
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Descrição da Tarefa</Form.Label>
                        <Form.Control type="text" placeholder="Digite o novo nome da tarefa"
                            value={task.description}
                            onChange={event => setTask({...task, description: event.target.value})} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button variant="success" onClick={() => {
                        props.editDescription(task)
                        handleCloseEdit()
                        }
                    }>
                        Editar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* //modal delete */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Apagar Tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>Deseja apagar a tarefa: <strong>{task.description}</strong></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        props.delete(task.id)
                        handleClose()
                        setSuccessDelete(true)
                        setTimeout(
                            () => {
                                setSuccessDelete(false)
                            }, 3000)
                    }}>
                        Apagar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default TodoList