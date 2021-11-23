import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/logo letras/logo-rivera_00000.png'
import './Navbar.css'

const NavbarLogo = () => {
    return (
        <>
            <Navbar className="navbar" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img id="logo"
                            alt="png"
                            src={logo}
                            width="90"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        </Nav>
                        <h3>Clasificados Digitales</h3>

                        {/*<Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Escribe la categoria"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </>
    

    )
}

export default NavbarLogo
