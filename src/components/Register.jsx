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
    const [username, setUsername] = useState(''); // 'userName' -> 'username'으로 변경

    const JoinHandler = (e) => {
        e.preventDefault();
        // 비밀번호 확인
        if (passwd !== passwdChk) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        SignUpUser();
    };

    const SignUpUser = async () => {
        const userData = { email, username, passwd }; // 'userName' -> 'username'
        console.log('Sending data:', userData); // 디버깅용 로그 추가
        const url = 'http://localhost:7777/api/users';
        try {
            const response = await axios.post(url, userData, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log('Response:', response.data); // 응답 확인
            if (response.data.result === 'success') {
                // 백엔드 응답 형식에 맞춤
                alert('회원가입 성공');
                InputClear();
                navigate('/login');
            } else {
                alert(`회원가입 실패: ${response.data.message}`);
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
        setUsername(''); // 'setUserName' -> 'setUsername'
        emailRef.current.focus();
    };

    return (
        <Container>
            <div className="register">
                <div className="registerTop centered">Sign UP</div>
                <Form onSubmit={JoinHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {email ? (
                            <Form.Label>Email address</Form.Label>
                        ) : (
                            <Form.Label>
                                Email address <span className="registerText">Don't use email</span>
                            </Form.Label>
                        )}
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            ref={emailRef}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <Button variant="outline-secondary">Duplicate Check</Button>
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
                            disabled={!email || !username || !passwd || passwd !== passwdChk} // 버튼 비활성화 조건 추가
                        >
                            Join
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
}
