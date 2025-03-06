import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Caution from '../Caution';

export default function SchoolSoccerField() {
    const navigate = useNavigate();
    return (
        <div className="field-body">
            <div className="field-img-wrap">
                <div>
                    <img className="field-img" src="images/football2.jpg" alt="구장사진"></img>
                </div>
            </div>
            <div className="field-des-wrap">
                <div className="field-des">KIT Soccer Field</div>
            </div>
            <div className="des-wrap">
                <div className="description-wrap">
                    <div className="description">
                        <h2 className="details">Stadium Details</h2>
                        <div className="field-size-des">Field Size : 100m * 70m</div>
                        <div className="construction">Date of construction of the stadium : 2023/02/15</div>
                    </div>
                </div>
            </div>

            <div className="btn-wrap">
                <div className="btn-map-wrap">
                    <span className="btn-map">View the Map</span>
                </div>
                <div className="btn-reservation-wrap">
                    <span className="btn-res" onClick={() => navigate('/reservationPage')}>
                        Reservation
                    </span>
                </div>
            </div>

            {/* <div className="field-map">
                <img className="map-img" src="images/scsoccermap.jpg" alt="지도" />
            </div> */}

            <Caution />
        </div>
    );
}
