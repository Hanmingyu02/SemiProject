import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
export default function Login() {
    return (
        <Container>
            <div className='loginWrap'>
                <div className='loginTopText'>Login</div>
                <Form>
                    <div className="loginBody">
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Control type='email' placeholder='Enter email' />
                        </Form.Group>
                        <Form.Group className='mb-5' controlId='formBasicPassword'>
                            <Form.Control type='password' placeholder='Password' />
                        </Form.Group>
                    </div>
                    <Button variant='outline-secondary' type='submit' className="loginButton">
                        <GoArrowRight />
                    </Button>
                </Form>
            </div>
        </Container>
    );
}
