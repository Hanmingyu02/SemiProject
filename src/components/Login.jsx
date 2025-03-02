import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { GoArrowRight } from "react-icons/go";
export default function Login() {
    return (
        <div>
            <Container>
                <div className='loginWrap'>
                    <div className='loginTitle'>KickOffBook</div>
                    <div className='loginTopText'>Login</div>
                    <Form>
                        <div className='loginBody'>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Control type='email' placeholder='Enter email' className='loginControl' />
                            </Form.Group>
                            <Form.Group className='mb-5' controlId='formBasicPassword'>
                                <Form.Control type='password' placeholder='Password' className='loginControl' />
                            </Form.Group>
                        </div>
                        <Button variant='outline-light' type='submit' className='loginButton'>
                            <GoArrowRight style={{ fontSize: "40px" }} />
                        </Button>
                    </Form>
                </div>
            </Container>
            
        </div>
    );
}
