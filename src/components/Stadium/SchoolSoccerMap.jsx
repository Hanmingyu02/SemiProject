import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function SchoolSoccerMap() {
    return (
        <div>
            <div className="des-wrap">
                <div className="description-wrap">
                    <div className="map-wrap">
                        <h2 className="map-title">School Soccer Field</h2>
                        <div className="addr-wrap">
                            <div className="marker">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="field-addr-wrap">
                                <span>Gumi-si Daehak-ro 61 Soccer Field</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field-img-wrap">
                <div>
                    <img className="field-img" src="images/scsoccermap.jpg" alt="구장지도"></img>
                </div>
            </div>
        </div>
    );
}
