import React, { useState } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';

export default function MyPage() {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [username, setUsername] = useState('');
    return (
        <Container>
            <div className="mypageTop centered">My Page</div>
            <Card style={{ width: '32rem' }} className="centered">
                <img src="/images/person.svg" alt="profile" className="mypageImg" s />
                <Card.Body>
                    <div className="mypageBody mb-4">User Information</div>
                    <Form>
                        <Row className="mb-3 align-items-center">
                            <Col xs={8}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        placeholder="Change email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Button variant="outline-danger" style={{ width: '150px' }}>
                                    Change Email
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row className="mb-3 align-items-center">
                            <Col xs={8}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Change name"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Button variant="outline-primary" style={{ width: '150px' }}>
                                    Change Name
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row className="mb-3 align-items-center">
                            <Col xs={8}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="text"
                                        name="passwd"
                                        placeholder="Change password"
                                        value={passwd}
                                        onChange={(e) => setPasswd(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Button variant="outline-success" style={{ width: '150px' }}>
                                    {' '}
                                    Change Passwd
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <div className="mb-1">
                        <Button variant="outline-warning" style={{ width: '235px' }}>
                            View reservation information
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}
