import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <div>
                        {" "}
                        <Carousel data-bs-theme='dark'>
                            <Carousel.Item>
                                <img className='d-block w-100' src='/images/Ajax.jpg' alt='First slide' />
                                <Carousel.Caption>
                                    <h5>학교 구장</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src='/images/Ajax.png' alt='Second slide' />
                                <Carousel.Caption>
                                    <h5>무슨 스타디움</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src='/images/REact.png' alt='Third slide' />
                                <Carousel.Caption>
                                    <h5>어쩌구 스타디움</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div style={{ border: "1px solid black", marginTop: "80px" }}>
                        공지 사항
                        <hr />
                        <p>ss</p>
                        <p>ssssss</p>
                    </div>
                    <div style={{ border: "1px solid black", marginTop: "80px" }}>
                        최근 게시글
                        <hr />
                        <p>ss</p>
                        <p>ssssss</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <Container>
                        <div style={{ marginLeft: 70 }}>사이드</div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
