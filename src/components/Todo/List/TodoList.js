import React from 'react'
import './TodoList.css'
import { Container, ListGroup, Row, Col, Button } from 'react-bootstrap'

function TodoList(props) {

    const renderTask = () => {
        return (
            <ListGroup.Item>
                <Row className="itemTask">
                    <Col xs={6} md={8}>
                        Fazer algo
                    </Col>
                    <Col>
                        <Button variant="info">
                            Concluir
                        </Button>
                        <Button className="mx-3" variant="danger">
                            Deletar
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        )
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