import React from "react";
import { Button, Carousel, Container, Row, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();
    const imageUrl1 = 'http://localhost:7777/public/images/football1.jpg';
    const imageUrl2 = 'http://localhost:7777/public/images/football2.jpg';
    const imageUrl3 = 'http://localhost:7777/public/images/football3.jpg';

    return (
        <div>
            <div style={{width:"80%" , margin:"auto"}}>
                <Carousel data-bs-theme='dark' controls={false} indicators={false}>
                    <Carousel.Item>
                        <img className='d-block w-100 topImg' src={imageUrl1} alt='First slide' />
                        <Carousel.Caption>
                            <h5 className='imgText'>School Futsal Field</h5>
                            <Button className='imgButton' variant='outline-light' onClick={() => navigate("scfutsal")}>
                                Stadium
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100 topImg' src={imageUrl2} alt='Second slide' />
                        <Carousel.Caption>
                            <h5 className='imgText'>Gupo Futsal Field</h5>
                            <Button className='imgButton' variant='outline-light' onClick={() => navigate("scsoccer")}>
                                Stadium
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100 topImg' src={imageUrl3} alt='Third slide' />
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
                            <img src={imageUrl1} className='midImg' alt='School Futsal Field' />
                        </Col>
                        <Col onClick={() => navigate("/scsoccer")}>
                            <img src={imageUrl2} className='midImg' alt='School Soccer Field' />
                        </Col>
                        <Col onClick={() => navigate("/gupofutsal")}>
                            <img src={imageUrl3} className='midImg' alt='Mortar Futsal Field' />
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
