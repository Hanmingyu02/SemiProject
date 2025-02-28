import { useState, useEffect } from "react";
import { Collapse, Modal, Button, Form, Nav, Navbar, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [checkUse, setCheckUse] = useState(false);
    const [checkAll, setCheckAll] = useState(false);
    const [checkAge, setCheckAge] = useState(false);
    const [checkInformation, setCheckInformation] = useState(false);
    const checkAllHandler = () => {
        const CheckAll = !checkAll;
        setCheckUse(CheckAll);
        setCheckAll(CheckAll);
        setCheckAge(CheckAll);
        setCheckInformation(CheckAll);
    };
    const checkUseHandler = (e) => {
        const checked = e.target.checked;
        setCheckUse(checked);
        if (!checked) setCheckAll(false);
    };
    const checkInformationHandler = (e) => {
        const checked = e.target.checked;
        setCheckInformation(checked);
        if (!checked) setCheckAll(false);
    };
    const checkAgeHandler = (e) => {
        const checked = e.target.checked;
        setCheckAge(checked);
        if (!checked) setCheckAll(false);
    };

    useEffect(() => {
        if (checkUse && checkInformation && checkAge) {
            setCheckAll(true);
        } else {
            setCheckAll(false);
        }
    }, [checkUse, checkInformation, checkAge]);

    const handleSignUp = () => {
        const iSFormValid = checkUse && checkInformation && checkAge;
        if (iSFormValid) {
            navigate("/login");
            handleClose();
        } else {
            alert("필수 이용약관에 동의 하셔야 합니다.");
        }
    };

    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} style={{ position: "relative" }}>
            <Navbar collapseOnSelect expand='lg' fixed='top' bg='light' data-bs-theme='light'>
                <Navbar.Brand as={Link} to='/'>
                    Reservation
                </Navbar.Brand>
                <div className='centered'>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link as={Link} to='/location'>
                                Location
                            </Nav.Link>
                            <Nav.Link as={Link} to='/stadiumPage'>
                                Stadium
                            </Nav.Link>
                            <Nav.Link as={Link} to='/boardPage'>
                                Notice
                            </Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to='/reservationPage'>
                                Reservation
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <Nav>
                    <Nav.Link as={Link} to='/login'>
                        Login
                    </Nav.Link>
                    <Nav.Link onClick={handleShow}>Register</Nav.Link>
                </Nav>
            </Navbar>
            <div className='centered bg-dark'>
                <Collapse in={open} className='p-4'>
                    <div id='example-collapse-text'>
                        <table style={{ width: "30%", color: "white", margin: "auto", textAlign: "left" }}>
                            <thead>
                                <tr>
                                    <th style={{ minWidth: "150px" }}>Location</th>
                                    <th style={{ minWidth: "150px" }}>Stadium</th>
                                    <th style={{ minWidth: "150px" }}>Notice</th>
                                    <th style={{ minWidth: "150px" }}>Reservation</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: "0.8rem", height: "40px" }}>
                                <tr style={{ height: "30px" }}>
                                    <td></td>
                                    <td onClick={() => navigate("/scfutsal")}>School Futsal Field</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr style={{ height: "30px" }}>
                                    <td></td>
                                    <td onClick={() => navigate("/scsoccer")}>School Soccer Field</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr style={{ height: "30px" }}>
                                    <td></td>
                                    <td onClick={() => navigate("/mofutsal")}>Mortar Futsal Field</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Collapse>
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <div className='modal-title-centered'>약관동의</div>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className='mb-3'>
                                <br />
                                <Form.Check
                                    type={type}
                                    id={1}
                                    label={`이용약관, 개인정보 수집 및 이용에 모두 동의합니다.`}
                                    checked={checkAll}
                                    onChange={checkAllHandler}
                                />
                                <br />
                                <Form.Check
                                    className='mt-4'
                                    type={type}
                                    label={`이용약관 동의 (필수)`}
                                    id={2}
                                    checked={checkUse}
                                    onChange={checkUseHandler}
                                />
                                <Card className='mt-4'>
                                    <Card.Body className='scrollable-card '>
                                        <Card.Title>제1조 목적</Card.Title>
                                        <Card.Text>
                                            본 이용약관은 “사이트명”(이하 "사이트")의 서비스의 이용조건과 운영에 관한
                                            제반 사항 규정을 목적으로 합니다. <br />
                                            <br />
                                            제2조 용어의 정의 본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.
                                            <br />
                                            <br />① 회원 : 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한
                                            자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 이용자를 말합니다.
                                            <br />
                                            ② 이용계약 : 사이트 이용과 관련하여 사이트와 회원간에 체결 하는 계약을
                                            말합니다.
                                            <br /> ③ 회원 아이디(이하 "ID") : 회원의 식별과 회원의 서비스 이용을 위하여
                                            회원별로 부여하는 고유한 문자와 숫자의 조합을 말합니다.
                                            <br /> ④ 비밀번호 : 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의
                                            권익 보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다.
                                            <br /> ⑤ 운영자 : 서비스에 홈페이지를 개설하여 운영하는 운영자를 말합니다.{" "}
                                            <br />⑥ 해지 : 회원이 이용계약을 해약하는 것을 말합니다.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <p></p>
                                <Form.Check
                                    className='mt-5'
                                    type={type}
                                    label={`개인정보 수집 및 이용 동의 (필수)`}
                                    id={3}
                                    checked={checkInformation}
                                    onChange={checkInformationHandler}
                                />
                                <Card className='mt-4'>
                                    <Card.Body className='scrollable-card'>
                                        <Card.Title>1. 개인정보 수집목적 및 이용목적</Card.Title>
                                        <Card.Text>
                                            (1) 홈페이지 회원 가입 및 관리 <br />
                                            회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격
                                            유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만
                                            14세 미만 아동의 개인정보 처리시 법정대리인의 동의 여부 확인, 각종
                                            고지․통지, 고충 처리 등의 목적 <br />
                                            <br />
                                            (2) 재화 또는 서비스 제공 물품 배송, 서비스 제공, 계약서․청구서 발송, 콘텐츠
                                            제공, 맞춤 서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등의
                                            목적
                                            <br />
                                            <br />
                                            (3) 고충 처리 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지,
                                            처리 결과 통보 등 <br />
                                            <br />
                                            2. 수집하는 개인정보 항목 ID, 성명, 비밀번호, 주소, 휴대폰 번호, 이메일,
                                            14세 미만 가입자의 경우 법정대리인 정보 <br />
                                            <br />
                                            3. 개인정보 보유 및 이용기간 회원탈퇴 시까지 (단, 관계 법령에 보존 근거가
                                            있는 경우 해당 기간 시까지 보유, 개인정보처리방침에서 확인 가능)
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <p></p>
                                <Form.Check
                                    checked={checkAge}
                                    onChange={checkAgeHandler}
                                    className='mt-4'
                                    type={type}
                                    label={`만 14세 이상입니다. (필수)`}
                                    id={4}
                                />
                            </div>
                        ))}
                    </Form>
                </Modal.Body>
                <Modal.Footer className='centered'>
                    <Button variant='outline-secondary' onClick={handleClose}>
                        취소
                    </Button>
                    <Button variant='outline-danger' onClick={handleSignUp}>
                        가입하기
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
