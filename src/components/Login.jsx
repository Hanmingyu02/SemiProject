import axios from "axios";
import React, { useState, useRef, useContext } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

import { AuthContext } from "./AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState({ email: "", passwd: "" });

    const { loginAuthUser } = useContext(AuthContext);

    const idRef = useRef(null);
    const passwdRef = useRef(null);

    const { email, passwd } = loginUser;

    console.log(loginUser.email, loginUser["email"]);

    const onChangeHandler = (e) => {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    };
    const onSubmitHandler = (e) => {
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
        requestLogin();
    };
    const requestLogin = async () => {
        let url = `http://localhost:7777/api/auth/login`;
        try {
            const response = await axios.post(url, loginUser);

            const { result } = response.data;
            if (result === "success") {
                const authUser = response.data.data;
                alert(response.data.message + ` ${authUser.username}님 환영합니다`);

                loginAuthUser(authUser);

                const { accessToken, refreshToken } = response.data;
                sessionStorage.setItem("accessToken", accessToken); //15분 사용 가능 => 세션 스토리지에 저장
                localStorage.setItem("refreshToken", refreshToken);

                inputClear();
                navigate("/");
            }
            if (result === "fail") {
                const { message } = response.data;
                alert(message);
                inputClear();
                idRef.current.focus();
            }
        } catch (error) {
            alert("Error: " + error);
            inputClear();
        }
    };

    const inputClear = () => {
        setLoginUser({ ...loginUser, email: "", passwd: "" });
    };
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
                                    name='email' // name 속성 추가
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
