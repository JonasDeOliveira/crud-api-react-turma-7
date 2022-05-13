import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row, Container, ListGroup, Button } from 'react-bootstrap'
import Header from '../../../components/template/Header'
import { baseUrl } from '../../../environments'
import { Link } from 'react-router-dom'

function ListCustomer(props) {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getCustomers()
    }, [])

    const getCustomers = () => {
        axios.get(`${baseUrl}/customer`)
            .then((response) => {
                setCustomers(response.data)
            })
    }

    const deleteCustomer = (id) => {
        axios.delete(`${baseUrl}/customer/${id}`)
            .then((response) => {
                alert('item removido com sucesso')
                getCustomers()
            })
    }


    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col className="text-center mb-4"><h1>Lista de Clientes</h1></Col>
                </Row>
                <Row>
                    <Col className="text-center" xs={4} md={2}>
                        <b>Nome</b>
                    </Col>
                    <Col className="text-center" xs={4} md={2}>
                        <b>Idade</b>
                    </Col>
                    <Col className="text-center" xs={4} md={2}>
                        <b>CPF</b>
                    </Col>
                    <Col className="text-center" xs={4} md={2}>
                        <b>Telefone</b>
                    </Col>
                    <Col className="text-center" xs={4} md={2}>
                        <b>Estado</b>
                    </Col>
                    <Col className="text-center" xs={4} md={2}>
                        <b>Ações</b>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {customers.map((customer) => {
                                return (
                                    <ListGroup.Item key={customer.id}>
                                        <Row className="itemTask align-items-center">
                                            <Col className="text-center" xs={4} md={2}>
                                                {customer.name}
                                            </Col>
                                            <Col className="text-center" xs={4} md={2}>
                                                {customer.age}
                                            </Col>
                                            <Col className="text-center" xs={4} md={2}>
                                                {customer.document}
                                            </Col>
                                            <Col className="text-center" xs={4} md={2}>
                                                {customer.tel}
                                            </Col>
                                            <Col className="text-center" xs={4} md={2}>
                                                {customer.state.name}
                                            </Col>
                                            <Col className="text-center" xs={12} md={2} className="d-flex align-items-center justify-content-center">
                                                <Link className="my-2 mx-1 btn btn-secondary" to={`editcustomer/${customer.id}`}>
                                                    Editar
                                                </Link>
                                                <Button className="my-2" variant="danger" onClick={() => deleteCustomer(customer.id)}>
                                                    Deletar
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ListCustomer