import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Offcanvas, Nav, NavDropdown } from 'react-bootstrap'


class NavbarComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }


    handleHide() {
        this.setState({ show: false })
    }

    handleShow() {
        this.setState({ show: true })
    }


    render() {
        return (
            <>
                <Navbar
                    expand={false}
                    style={{ backgroundColor: "#0b1031" }}
                >
                    <Container fluid>
                        <div>
                            <Navbar.Text className="h4 ps-2 text-light edit-btn" onClick={this.handleShow}>☰</Navbar.Text>
                            <Navbar.Text className="h4 ps-2 text-light">Menu</Navbar.Text>
                        </div>
                        <Navbar.Text className='text-light'><span className="zoomIn">Joke Teller App</span></Navbar.Text>

                        <Navbar.Brand className="text-light">V1.0</Navbar.Brand>

                        <Offcanvas
                            id="offcanvasNavbar"
                            show={this.state.show} onHide={this.handleHide}
                            style={{ backgroundColor: "#212529" }}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel" className="text-light">Menu</Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-1">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default NavbarComponent;
