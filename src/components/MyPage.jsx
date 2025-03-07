import React, { useState, useRef, useEffect } from 'react';
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

    const { user, logoutUser, updateUser } = useUser(); 
    const navigate = useNavigate();

    
    const requestChangeData = async (field, data) => {
        const url = `http://localhost:7777/api/users/${user.user_id}`;

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

         
            if (result.user) {
                updateUser(result.user);
            }

            if (field === 'email') setEmail('');
            if (field === 'username') setUsername('');
            if (field === 'passwd') setPasswd('');

            alert(result.message || `${field} has been successfully changed.`);
        } catch (error) {
            console.error(`Error changing ${field}:`, error);
            alert(error.message || `An error occurred while changing ${field}.`);
        }
    };

    
    const changeEmailData = (e) => {
        e.preventDefault();
        if (!user?.user_id) {
            alert('Login is required.');
            return;
        }
        const data = {
            email: email || user.email, 
            username: user.username,
            passwd: user.passwd,
        };
        user.email =email;
        requestChangeData('email', data);
    };

  
    const changeNameData = (e) => {
        e.preventDefault();
        if (!user?.user_id) {
            alert('Login is required.');
            return;
        }
        const data = {
            email: user.email,
            username: username || user.username, 
            passwd: user.passwd,
        };
        user.username = username;
        requestChangeData('username', data);
    };

    
    const changePasswdData = (e) => {
        e.preventDefault();
        if (!user?.user_id) {
            alert('Login is required.');
            return;
        }
        const data = {
            email: user.email,
            username: user.username,
            passwd: passwd || user.passwd, 
        };
        user.passwd = passwd;
        requestChangeData('passwd', data);
    };

    
    const deleteAccount = async () => {
        if (!user) {
            alert('Login is required.');
            return;
        }
        if (!window.confirm('Are you sure you want to delete your account?')) return;

        const url = `http://localhost:7777/api/users/${user.user_id}`;
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
            await logoutUser(user.email);
            navigate('/');
        } catch (error) {
            console.error('Error deleting account:', error);
            alert(error.message || 'An error occurred while deleting the account.');
        }
    };

    return (
        <Container>
            <div className="mypageTop centered">My Page</div>
            
            <Card style={{ width: '34rem' }} className="centered">
                <img src="/images/person.svg" alt="Profile" className="mypageImg" />

                <Card.Body>
                    <div className="mypageBody mb-4">User Information</div>

                    <Form onSubmit={changeEmailData}>
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
                                <Button type="submit" variant="outline-danger" style={{ width: '160px' }}>
                                    Change Email
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    <Form onSubmit={changeNameData}>
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
                                <Button type="submit" variant="outline-primary" style={{ width: '160px' }}>
                                    Change Name
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    <Form onSubmit={changePasswdData}>
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
                                <Button type="submit" variant="outline-success" style={{ width: '160px' }}>
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