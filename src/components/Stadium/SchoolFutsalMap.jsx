import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function SchoolFutsalMap() {
    return (
        <div>
            <div className="des-wrap">
                <div className="description-wrap">
                    <div className="map-wrap">
                        <h2 className="map-title">School Futsal Field</h2>
                        <div className="addr-wrap">
                            <div className="marker">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="field-addr-wrap">
                                <span>Gumi-si Daehak-ro 61 Futsal Field</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field-img-wrap">
                <div>
                    <img className="field-img" src="images/scfutsalmap.jpg" alt="구장지도"></img>
                </div>
            </div>
        </div>
    );
}
