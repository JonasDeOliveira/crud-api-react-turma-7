import React from 'react'
import './TodoList.css'
import { Container, ListGroup, Row, Col, Button } from 'react-bootstrap'

function TodoList(props) {

    const tasks = props.tasks || []

    const taskDone = (task) => {
        return (
            <Button variant={task.done ? 'success' : 'info'}>
                { task.done ? 'Concluído' : 'Concluir' }
            </Button>
        )
    }

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
                            <Button className="mx-3" variant="danger">
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
            <Row>
                <Col>
                    <ListGroup variant="flush">
                        {renderTask()}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default TodoList