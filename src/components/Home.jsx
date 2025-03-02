import React, { useState } from "react";
import { Button, Carousel, Container, Row, Col, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";

export default function Home() {
    const navigate = useNavigate();
    

    return (
        <div>
            <div style={{width:"80%" , margin:"auto"}}>
                <Carousel data-bs-theme='dark' controls={false} indicators={false}>
                    <Carousel.Item>
                        <img className='d-block w-100 topImg' src='/images/football1.jpg' alt='First slide' />
                        <Carousel.Caption>
                            <h5 className='imgText'>School Futsal Field</h5>
                            <Button className='imgButton' variant='outline-light' onClick={() => navigate("scfutsal")}>
                                Stadium
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100 topImg' src='/images/football3.jpg' alt='Second slide' />
                        <Carousel.Caption>
                            <h5 className='imgText'>Gupo Futsal Field</h5>
                            <Button className='imgButton' variant='outline-light' onClick={() => navigate("scsoccer")}>
                                Stadium
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100 topImg' src='/images/football3.jpg' alt='Third slide' />
                        <Carousel.Caption>
                            <h5 className='imgText'>School Soccer Field</h5>
                            <Button className='imgButton' variant='outline-light' onClick={() => navigate("/gupofutsal")}>
                                Stadium
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Container>
                <div style={{ marginTop: "50px" }}>
                    <div className='centered m-5 stadium'>Stadium</div>
                    <Row className='midCol'>
                        <Col onClick={() => navigate("/scfutsal")}>
                            <img src='/images/football1.jpg' className='midImg' alt='School Futsal Field' />
                        </Col>
                        <Col onClick={() => navigate("/scsoccer")}>
                            <img src='/images/football2.jpg' className='midImg' alt='School Soccer Field' />
                        </Col>
                        <Col onClick={() => navigate("/gupofutsal")}>
                            <img src='/images/football3.jpg' className='midImg' alt='Mortar Futsal Field' />
                        </Col>
                    </Row>
                    <Row className='fieldName mt-2'>
                        <Col onClick={() => navigate("/scfutsal")}>School Futsal Field</Col>
                        <Col onClick={() => navigate("/scsoccer")}>School Soccer Field</Col>
                        <Col onClick={() => navigate("/gupofutsal")}>Gupo Futsal Field</Col>
                    </Row>
                    <Row className='explanation'>
                        <Col onClick={() => navigate("/scfutsal")}>A great place for sports and fun!</Col>
                        <Col onClick={() => navigate("/scsoccer")}>Perfect for team activities and events!</Col>
                        <Col onClick={() => navigate("/gupofutsal")}>Ideal for friendly matches and practice!</Col>
                    </Row>
                </div>
            </Container>
            
        </div>
    );
}
