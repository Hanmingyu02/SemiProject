import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import BoardPage from './components/Board/BoardPage';
import StadiumPage from './components/StadiumPage';
import ReservationPage from './components/ReservationPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CustomerService from './components/CustomerService';
import Location from './components/Location';
import SchoolFutsalField from './components/Stadium/SchoolFutsalField';
import SchoolSoccerField from './components/Stadium/SchoolSoccerField';
import GupoFusalField from './components/Stadium/GupoFusalField';
import Register from './components/Register';
import Footer from './components/Footer';
import MyPage from './components/MyPage';
import BoardPost from './components/Board/BoardPost';
import Boardnotice from './components/Board/Boardnotice';
import ScfutsalMap from './components/Stadium/SchoolFutsalMap';
import ScsoccerMap from './components/Stadium/SchoolSoccerMap';
import GupofutsalMap from './components/Stadium/GupoFutsalMap';

function App() {
    return (
        <div className="py-5">
            <BrowserRouter>
                <div>
                    <div className="mainWrap">
                        <Row>
                            <Col className="mb-5">
                                <Header />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/boardPage" element={<BoardPage />} />
                                    <Route path="/stadiumPage" element={<StadiumPage />} />
                                    <Route path="/reservationPage" element={<ReservationPage />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/signup" element={<SignUp />} />
                                    <Route path="/customerservice" element={<CustomerService />} />
                                    <Route path="/location" element={<Location />} />
                                    <Route path="/scsoccer" element={<SchoolSoccerField />} />
                                    <Route path="/gupofutsal" element={<GupoFusalField />} />
                                    <Route path="/scfutsal" element={<SchoolFutsalField />} />
                                    <Route path="/register" element={<Register />} />
                                    <Route path="/mypage" element={<MyPage />} />
                                    <Route path="/post" element={<BoardPost />} />
                                    <Route path="/notice/:notice_id" element={<Boardnotice />} />
                                    <Route path="/scfutsalmap" element={<ScfutsalMap />} />
                                    <Route path="/scsoccermap" element={<ScsoccerMap />} />
                                    <Route path="/gupofutsalmap" element={<GupofutsalMap />} />
                                </Routes>
                            </Col>
                        </Row>
                    </div>
                    <Row className="mainBottom">
                        <Col className="mb-5">
                            <Footer />
                        </Col>
                    </Row>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
