import React from 'react'
import './footer.css'
import { Col, Container, Row, ListGroup } from 'react-bootstrap'


function Footer(props) {

    return(
        <>
        <div className="footer mt-3">
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <ListGroup as="ul" className="list-footer">
                            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={6} md={3}>
                        <ListGroup as="ul" className="list-footer">
                            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={6} md={3}>
                        <ListGroup as="ul" className="list-footer">
                            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={6} md={3}>
                        <ListGroup as="ul" className="list-footer">
                            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center pt-3 copyright">
                        Todos os direitos reservados
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Footer