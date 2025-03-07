// src/components/MyPage.js
import React, { useState, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [username, setUsername] = useState('');

    const emailRef = useRef();
    const passwdRef = useRef();
    const usernameRef = useRef();

    const { user, logoutUser } = useUser();
    const navigate = useNavigate();

    const changeData = (e, field) => {
        e.preventDefault();
        if (!user?.userId) {
            alert('Login is required.');
            return;
        }
        requestChangeDate(field);
    };

    const requestChangeDate = async (field) => {
        const url = `http://localhost:77777/api/users/${user.userId}`;
        
        const data = {};
        if (field === 'email') data.email = email;
        if (field === 'username') data.username = username;
        if (field === 'passwd') data.passwd = passwd;

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (!response.ok || result.result === 'fail') {
                throw new Error(result.message || 'There was a problem with the server response.');
            }

            console.log(`${field} change successful:`, result);
            if (field === 'email') setEmail('');
            if (field === 'username') setUsername('');
            if (field === 'passwd') setPasswd('');

            alert(result.message || `${field} has been successfully changed.`);

        } catch (error) {
            console.error(`Error changing ${field}:`, error);
            alert(error.message || `An error occurred while changing ${field}.`);
        }
    };

    const deleteAccount = async () => {
        if (!user?.userId) {
            alert('Login is required.');
            return;
        }
        if (!window.confirm('Are you sure you want to delete your account?')) return;

        const url = `http://localhost:77777/api/users/${user.userId}`;
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await response.json();
            if (!response.ok || result.result === 'fail') {
                throw new Error(result.message || 'Account deletion failed.');
            }

            alert(result.message || 'Account has been successfully deleted.');
            await logoutUser(user.email); // Logout after deletion
            navigate('/'); // Redirect to home

        } catch (error) {
            console.error('Error deleting account:', error);
            alert(error.message || 'An error occurred while deleting the account.');
        }
    };

    return (
        <Container>
            <div className="mypageTop centered">My Page</div>
            <Card style={{ width: '32rem' }} className="centered">
                <img src="/images/person.svg" alt="Profile" className="mypageImg" />
                <Card.Body>
                    <div className="mypageBody mb-4">User Information</div>
    
                    <Form onSubmit={(e) => changeData(e, 'email')}>
                        <Row className="mb-3 align-items-center">
                            <Col xs={8}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        ref={emailRef}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Button type="submit" variant="outline-danger" style={{ width: '150px' }}>
                                    Change Email
                                </Button>
                            </Col>
                        </Row>
                    </Form>
               
                    <Form onSubmit={(e) => changeData(e, 'username')}>
                        <Row className="mb-3 align-items-center">
                            <Col xs={8}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        placeholder="Name"
                                        ref={usernameRef}
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Button type="submit" variant="outline-primary" style={{ width: '150px' }}>
                                    Change Name
                                </Button>
                            </Col>
                        </Row>
                    </Form>
        
                    <Form onSubmit={(e) => changeData(e, 'passwd')}>
                        <Row className="mb-3 align-items-center">
                            <Col xs={8}>
                                <Form.Group controlId="formBasicPasswd">
                                    <Form.Control
                                        type="password"
                                        name="passwd"
                                        placeholder="Password"
                                        ref={passwdRef}
                                        value={passwd}
                                        onChange={(e) => setPasswd(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Button type="submit" variant="outline-success" style={{ width: '150px' }}>
                                    Change Password
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <div className="mb-1">
                        <Button variant="outline-dark" style={{ width: '200px' }}>
                            Reservation Information
                        </Button>
                        <Button
                            className="m-3"
                            variant="outline-dark"
                            style={{ width: '200px' }}
                            onClick={deleteAccount}
                        >
                            Delete Account
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}