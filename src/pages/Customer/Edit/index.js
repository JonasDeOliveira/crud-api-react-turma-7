import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row, Container, Form, Button } from 'react-bootstrap'
import Header from '../../../components/template/Header'
import { baseUrl } from '../../../environments'
import { useParams, useHistory } from 'react-router-dom'
import { customerModel } from '../../../models'

function EditCustomer(props) {

    const { id } = useParams()
    let history = useHistory();
    const [customer, setCustomer] = useState(customerModel)
    const [states, setStates] = useState([])

    useEffect(() => {
        getCustomer()
        getStates()
    }, [])

    const getCustomer = () => {
        axios.get(`${baseUrl}/customer/${id}`)
            .then((response) => {
                setCustomer(response.data)
            })
    }

    const editCustomer  = (id) => {
        axios.put(`${baseUrl}/customer/${id}`, customer)
        .then((response) => {
            alert('cliente alterado')
            history.push("/listcustomer")
        })
    }

    const getStates = () => {
        axios.get(`${baseUrl}/states`)
            .then((response) => {
                let statesFilter = []
                let statesResponse = response.data
                for (let i = 0; i < statesResponse.length; i++) {
                    if (customer.state.id != statesResponse[i].id) {
                        statesFilter.push(statesResponse[i])
                    }
                }
                setStates(statesFilter)
            })
    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col className="text-center"><h1>Editar Cliente</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control type="text"
                                    value={customer.name}
                                    onChange={(event) => { setCustomer({ ...customer, name: event.target.value }) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Idade:</Form.Label>
                                <Form.Control type="text"
                                    value={customer.age}
                                    onChange={(event) => { setCustomer({ ...customer, age: event.target.value }) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="document">
                                <Form.Label>CPF:</Form.Label>
                                <Form.Control type="text"
                                    value={customer.document}
                                    onChange={(event) => { setCustomer({ ...customer, document: event.target.value }) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="tel">
                                <Form.Label>Telefone:</Form.Label>
                                <Form.Control type="text"
                                    value={customer.tel}
                                    onChange={(event) => { setCustomer({ ...customer, tel: event.target.value }) }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select
                                    onChange={(event) => { 
                                        let stateSelected = event.target.options.selectedIndex
                                        let textState = event.target.options[stateSelected].innerText
                                        setCustomer({...customer, state: {id: event.target.value, name: textState}})
                                        }}>
                                    <option value={customer.state.id}>{customer.state.name}</option>
                                    {
                                        states.map((item) => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Button variant="success" className="my-5" onClick={() => editCustomer(customer.id)}>Editar</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EditCustomer