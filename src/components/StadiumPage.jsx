import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StadiumPage() {
    const navigate = useNavigate();
    const imageUrl1 = 'http://localhost:7777/public/images/football1.jpg';
    const imageUrl2 = 'http://localhost:7777/public/images/football2.jpg';
    const imageUrl3 = 'http://localhost:7777/public/images/football3.jpg';
    return (
        <div>
            <h1 className="loc-title">Stadium</h1>
            <div className="loc-des">
                <ul className="loc-ul">
                    <li>
                        <div className="loc-li">
                            <span className="li-title">School Soccer Field</span>
                            <img className="school-soccer" src={imageUrl2} alt="학교 운동장" />
                            <button className="li-map" onClick={() => navigate('/scsoccer')}>
                                Stadium Details
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="loc-li">
                            <span className="li-title">School Futsal Field</span>
                            <img className="school-futsal" src={imageUrl1} alt="학교 풋살장" />
                            <button className="li-map" onClick={() => navigate('/scfutsal')}>
                                Stadium Details
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="loc-li">
                            <span className="li-title">Gupo Futsal Field</span>
                            <img className="gupo-futsal" src={imageUrl3} alt="구포 체육공원" />
                            <button className="li-map" onClick={() => navigate('/gupofutsal')}>
                                Stadium Details
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
