import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <div 
            onMouseEnter={() => setOpen(true)} 
            onMouseLeave={() => setOpen(false)}
            style={{ position: "relative" }}
        >
            <Navbar collapseOnSelect expand='lg' fixed='top' bg='light' data-bs-theme='light'>
                <Navbar.Brand as={Link} to='/'>
                    Reservation
                </Navbar.Brand>
                <div className='centered'>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link as={Link} to='/stadiumPage'>
                                Stadium
                            </Nav.Link>
                            <Nav.Link as={Link} to='/location'>
                                Location
                            </Nav.Link>
                            <Nav.Link as={Link} to='/boardPage'>
                                Notice
                            </Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to='/reservationPage'>
                                Reservation
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <Nav>
                    <Nav.Link as={Link} to='/login'>
                        Login
                    </Nav.Link>
                    <Nav.Link eventKey={2} as={Link} to='/register'>
                        Register
                    </Nav.Link>
                </Nav>
            </Navbar>
            <div className='centered bg-dark'>
                <Collapse in={open} className='p-4'>
                    <div id='example-collapse-text'>
                        <table style={{ width: "30%", color: "white", margin: "auto", textAlign: "left" }}>
                            <thead>
                                <tr>
                                    <th style={{ minWidth: "150px" }}>Stadium</th>
                                    <th style={{ minWidth: "150px" }}>Location</th>
                                    <th style={{ minWidth: "150px" }}>Notice</th>
                                    <th style={{ minWidth: "150px" }}>Reservation</th>
                                </tr>
                            </thead>
                            <tbody style={{fontSize:"0.8rem"}}>
                                <tr>
                                    <td></td>
                                    <td>School Futsal Field</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>School Soccer Field</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Mortar Futsal Field</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}