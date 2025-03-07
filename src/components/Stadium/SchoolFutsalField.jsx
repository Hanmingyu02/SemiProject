import React from "react";
import { useNavigate } from "react-router-dom";
import Caution from "../Caution";

export default function SchoolFutsalField() {
    const navigate = useNavigate();
    const imageUrl1 = "http://localhost:7777/public/images/football1.jpg";
    return (
        <div className='field-body'>
            <div className='field-img-wrap'>
                <div>
                    <img className='field-img' src={imageUrl1} alt='구장사진'></img>
                </div>
            </div>
            <div className='field-des-wrap'>
                <div className='field-des'>KIT Futsal Field</div>
            </div>
            <div className='des-wrap'>
                <div className='description-wrap'>
                    <div className='description'>
                        <h2 className='details'>Stadium Details</h2>
                        <div className='field-size-des'>Field Size : 40m * 20m</div>
                        <div className='construction'>Date of construction of the stadium : 2019/10/20</div>
                    </div>
                </div>
            </div>

            <div className='btn-wrap'>
                <div className='btn-map-wrap'>
                    <span className='btn-map' onClick={() => navigate("/scfutsalmap")}>
                        View the Map
                    </span>
                </div>
                <div className='btn-reservation-wrap'>
                    <span className='btn-res' onClick={() => navigate("/reservationPage")}>
                        Reservation
                    </span>
                </div>
            </div>

            <Caution />
        </div>
    );
}
