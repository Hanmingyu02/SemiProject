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
<<<<<<< HEAD
import SchoolFutsalField from "./components/Stadium/SchoolFutsalField";
import SchoolSoccerField from "./components/Stadium/SchoolSoccerField";
import MortarFutsalField from "./components/Stadium/MortarFutsalField";
=======
import Register from "./components/Register";
>>>>>>> origin/main

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
<<<<<<< HEAD
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
=======
                    <Row >
                        <Col xs={12} sm={12} md={12} lg={12} >
>>>>>>> origin/main
                            <Routes>
                                <Route path='/' element={<Home />}></Route>
                                <Route path='/boardPage' element={<BoardPage />}></Route>
                                <Route path='/stadiumPage' element={<StadiumPage />}></Route>
                                <Route path='/reservationPage' element={<ReservationPage />}></Route>
                                <Route path='/login' element={<Login />}></Route>
                                <Route path='/signup' element={<SignUp />}></Route>
                                <Route path='/customerservice' element={<CustomerService />}></Route>
                                <Route path='/location' element={<Location />}></Route>
<<<<<<< HEAD
                                <Route path='/scsoccer' element={<SchoolSoccerField />}></Route>
                                <Route path='/mofutsal' element={<MortarFutsalField />}></Route>
                                <Route path='/scfutsal' element={<SchoolFutsalField />}></Route>
=======
                                
                                <Route path='/register' element={<Register />}></Route>
>>>>>>> origin/main
                            </Routes>
                        </Col>
                    </Row>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
