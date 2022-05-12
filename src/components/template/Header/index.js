import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header(props) {

    return(
        <header className="mb-3">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">CRUD React</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/home" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/register" className="nav-link">Customer</Link>
                        <Link to="/listcustomer" className="nav-link">List Customer</Link>
                        <Link to="/editcustomer" className="nav-link">Edit Customer</Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header