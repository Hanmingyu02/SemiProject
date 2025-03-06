import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const emailRef = useRef();
    const nameRef = useRef();
    const passwdRef = useRef();
    const passwdChkRef = useRef();

    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [passwdChk, setPasswdChk] = useState('');
    const [username, setUsername] = useState('');
    const [isEmailAvailable, setIsEmailAvailable] = useState(null);

    const CheckDuplicateEmail = async () => {
        if (!email) {
            alert('Please enter your email');
            email.target.focus();
            return;
        }
        try {
            const response = await axios.post(
                'http://localhost:7777/api/users/duplex',
                { email },
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log('Duplicate check response:', response.data);
            if (response.data.result === 'ok') {
                setIsEmailAvailable(true);
                alert(response.data.message);
                passwdRef.target.focus();
            } else if (response.data.result === 'no') {
                setIsEmailAvailable(false);
                alert(response.data.message);
                setEmail('');
                emailRef.target.focus();
            }
        } catch (error) {
            console.error('Email check failed:', error.message);
            alert(`Email duplication check failed: ${error.message}`);
            setIsEmailAvailable(null);
        }
    };
    const JoinHandler = (e) => {
        e.preventDefault();
        if (passwd !== passwdChk) {
            alert('Password does not mathch');
            return;
        }
        SignUpUser();
    };

    const SignUpUser = async () => {
        const userData = { email, username, passwd };
        const url = 'http://localhost:7777/api/users';
        try {
            const response = await axios.post(url, userData, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log('Response:', response.data);
            if (response.data.result === 'success') {
                alert('Signup success');
                InputClear();
                navigate('/login');
            } else {
                alert(`Signup fail: ${response.data.message}`);
            }
        } catch (error) {
            console.error('Request failed:', error.message);
            alert(`Error: ${error.message}`);
            InputClear();
        }
    };

    const InputClear = () => {
        setEmail('');
        setPasswd('');
        setPasswdChk('');
        setUsername('');
        emailRef.current.focus();
    };

    return (
        <Container>
            <div className="register">
                <div className="registerTop centered">Sign UP</div>
                <Form onSubmit={JoinHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            Email address
                            {isEmailAvailable === false && <span className="registerText"> Don't use email</span>}
                            {isEmailAvailable === true && (
                                <span className="registerText text-success"> Available email</span>
                            )}
                        </Form.Label>

                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            ref={emailRef}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <Button variant="outline-secondary" onClick={CheckDuplicateEmail}>
                            Duplicate Check
                        </Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label> {/* 'Name' -> 'Username'으로 UI 개선 */}
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            ref={nameRef}
                            value={username} // 'userName' -> 'username'
                            onChange={(e) => setUsername(e.target.value)} // 'setUserName' -> 'setUsername'
                        />
                        <br />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {passwd ? (
                            <Form.Label>Password</Form.Label>
                        ) : (
                            <Form.Label>
                                Password <span className="registerText">Please enter your password.</span>
                            </Form.Label>
                        )}
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={passwd}
                            ref={passwdRef}
                            onChange={(e) => setPasswd(e.target.value)}
                        />
                        <br />
                        {passwd === passwdChk ? (
                            <Form.Label>Password Check</Form.Label>
                        ) : (
                            <Form.Label>
                                Password Check <span className="registerText">The passwords do not match.</span>
                            </Form.Label>
                        )}
                        <Form.Control
                            type="password"
                            placeholder="Password Check"
                            value={passwdChk}
                            ref={passwdChkRef}
                            onChange={(e) => setPasswdChk(e.target.value)}
                        />
                    </Form.Group>
                    <div className="registerBtn">
                        <Button
                            type="submit"
                            variant="outline-primary"
                            style={{ minWidth: '150px' }}
                            disabled={!email || !username || !passwd || passwd !== passwdChk}
                        >
                            Join
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
}
