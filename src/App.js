import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import BoardPage from "./components/BoardPage";
import StadiumPage from "./components/StadiumPage";
import ReservationPage from "./components/ReservationPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CustomerService from "./components/CustomerService";
import Location from "./components/Location";
import SchoolFutsalField from "./components/Stadium/SchoolFutsalField";
import SchoolSoccerField from "./components/Stadium/SchoolSoccerField";
import GupoFusalField from "./components/Stadium/GupoFusalField";

function App() {
    return (
        <div className='py-5'>
            <BrowserRouter>
                <div>
                    <Row>
                        <Col className='mb-5'>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/boardPage' element={<BoardPage />} />
                                <Route path='/stadiumPage' element={<StadiumPage />} />
                                <Route path='/reservationPage' element={<ReservationPage />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/signup' element={<SignUp />} />
                                <Route path='/customerservice' element={<CustomerService />} />
                                <Route path='/location' element={<Location />} />
                                <Route path='/scsoccer' element={<SchoolSoccerField />} />
                                <Route path='/gupofutsal' element={<GupoFusalField />} />
                                <Route path='/scfutsal' element={<SchoolFutsalField />} />
                            </Routes>
                        </Col>
                    </Row>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
