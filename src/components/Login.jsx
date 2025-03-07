import React, { useState, useRef, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { useUser } from "../context/UserContext";

export default function Login() {
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState({ email: "", passwd: "" });
    const { login, user } = useUser();

    const idRef = useRef(null);
    const passwdRef = useRef(null);

    const { email, passwd } = loginUser;

    const onChangeHandler = (e) => {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!email) {
            alert("이메일을 입력하세요.");
            idRef.current.focus();
            return;
        }
        if (!passwd) {
            alert("비밀번호를 입력하세요.");
            passwdRef.current.focus();
            return;
        }
        const success = await login(email, passwd);

        if (success) {
            navigate("/");
        } else {
            alert("로그인에 실패했습니다.");
            inputClear();
            idRef.current.focus();
        }
    };

    const inputClear = () => {
        setLoginUser({ email: "", passwd: "" });
    };

    useEffect(() => {
        if (user) {
            alert(`${user.username}님 환영합니다`);
        }
    }, [user]);

    return (
        <div>
            <Container>
                <div className='loginWrap'>
                    <div className='loginTitle'>KickOffBook</div>
                    <div className='loginTopText'>Login</div>
                    <Form onSubmit={onSubmitHandler}>
                        <div className='loginBody'>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Control
                                    type='text'
                                    name='email'
                                    placeholder='Enter email'
                                    className='loginControl'
                                    value={loginUser.email}
                                    onChange={onChangeHandler}
                                    ref={idRef}
                                />
                            </Form.Group>
                            <Form.Group className='mb-5' controlId='formBasicPassword'>
                                <Form.Control
                                    type='password'
                                    name='passwd'
                                    placeholder='Password'
                                    className='loginControl'
                                    value={loginUser.passwd}
                                    onChange={onChangeHandler}
                                    ref={passwdRef}
                                />
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
