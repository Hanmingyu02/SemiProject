// Header.jsx
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { GiSoccerBall } from "react-icons/gi";
export default function Header() {
    return (
        <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary' fixed='top' bg='dark' data-bs-theme='dark'>

                <Navbar.Brand as={Link} to='/'>
                    <GiSoccerBall style={{ fontSize: "30px", marginLeft:"10px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/stadiumPage'>
                            구장 상세페이지
                        </Nav.Link>
                        <Nav.Link as={Link} to='/reservationPage'>
                            예약 페이지
                        </Nav.Link>
                        <Nav.Link as={Link} to='/boardPage'>
                            자유게시판
                        </Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to='/mypage'>
                            마이페이지
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown
                            title={
                                <span>
                                    {" "}
                                    <AiOutlineMenu style={{ fontSize: "30px" }} />{" "}
                                    <IoPersonCircleOutline
                                        style={{ marginRight: "5px", verticalAlign: "middle", fontSize: "30px" }}
                                    />{" "}
                                </span>
                            }
                            id='collapsible-nav-dropdown'
                        >
                            <NavDropdown.Item as={Link} to='/signup'>
                                회원가입
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/login'>
                                로그인
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to='/customerservice'>
                                고객센터
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
    );
}
