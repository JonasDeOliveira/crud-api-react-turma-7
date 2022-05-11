import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/template/Header'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { customerModel } from '../../models'

function RegisterCustomer(props) {

    const [states, setStates] = useState([])
    const [customer, setCustomer] = useState(customerModel)
    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')
    // const [document, setDocument] = useState('')
    // const [tel, setTel] = useState('')
    // const [state, setState] = useState('')
    const [successRegister, SetSuccessRegister] = useState(false)

    const getStates = () => {
        axios.get('http://localhost:8080/states')
            .then((response) => {
                setStates(response.data)
            })
    }

    const register = () => {
        axios.post('http://localhost:8080/customer', customer)
            .then((response) => {
                SetSuccessRegister(true)
            })
    }

    // const register = () => {

    //     let customer = {
    //         name: name,
    //         age: age,
    //         document: document,
    //         tel: tel,
    //         state: state,
    //     }
    // 
    //     axios.post('http://localhost:8080/customer', customer)
    //         .then((response) => {
    //             SetSuccessRegister(true)
    //         })
    // }

    useEffect(() => {
        getStates()
    }, [])

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col><h1>Cadastro de Usuário</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control type="text"
                                    value={customer.name}
                                    onChange={(event) => { setCustomer({...customer, name: event.target.value}) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Idade:</Form.Label>
                                <Form.Control type="text"
                                    value={customer.age}
                                    onChange={(event) => { setCustomer({...customer, age: event.target.value}) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="document">
                                <Form.Label>CPF:</Form.Label>
                                <Form.Control type="text"
                                    value={customer.document}
                                    onChange={(event) => { setCustomer({...customer, document: event.target.value}) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="tel">
                                <Form.Label>Telefone:</Form.Label>
                                <Form.Control type="text"
                                    value={customer.tel}
                                    onChange={(event) => { setCustomer({...customer, tel: event.target.value}) }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select
                                    onChange={(event) => { setCustomer({...customer, state: event.target.value}) }}>
                                    <option>Selecione um estado</option>
                                    {
                                        states.map((item) => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                            {successRegister ? <h3>Usuário cadastrado com sucesso</h3> : ''}
                            <Button variant="success" className="my-5" onClick={register}>Success</Button>
                        </Form>






                        {/* <Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control type="text" 
                                    value={name}
                                    onChange={(event)=>{setName(event.target.value)}} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Idade:</Form.Label>
                                <Form.Control type="text" 
                                    value={age}
                                    onChange={(event)=>{setAge(event.target.value)}}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="document">
                                <Form.Label>CPF:</Form.Label>
                                <Form.Control type="text"  
                                    value={document}
                                   onChange={(event)=>{setDocument(event.target.value)}}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="tel">
                                <Form.Label>Telefone:</Form.Label>
                                <Form.Control type="text"
                                    value={tel}  
                                    onChange={(event)=>{setTel(event.target.value)}}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select 
                                     onChange={(event)=>{setState(event.target.value)}}>
                                         <option>Selecione um estado</option>
                                    {
                                        states.map((item)=>{
                                            return (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                            {successRegister ? <h3>Usuário cadastrado com sucesso</h3> : ''}
                            <Button variant="success" className="my-5" onClick={register}>Success</Button>
                        </Form> */}
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default RegisterCustomer