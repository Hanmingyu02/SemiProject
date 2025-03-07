import React, { useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function GupoFutsalMap() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=176a433fafdf9eabf366d150a6e89aeb&autoload=false`;

        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map'); 
                const options = {
                    center: new window.kakao.maps.LatLng(36.132819811222305, 128.40416835063792), 
                    level: 3, 
                };
                const map = new window.kakao.maps.Map(container, options);

                const markerPosition = new window.kakao.maps.LatLng(36.132819811222305, 128.40416835063792);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                });
                marker.setMap(map);
            });
        };
    }, []);

    return (
        <div>
            <div className="des-wrap">
                <div className="description-wrap">
                    <div className="map-wrap">
                        <h2 className="map-title">Gupo Futsal Field</h2>
                        <div className="addr-wrap">
                            <div className="marker">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="field-addr-wrap">
                                <span>Gumi-si Okgye 2gongdan-ro 3-gil Futsal Field</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field-map-wrap">
                <div className="field-img-wrap">
                    <div className="field-map">
                        <div id="map" style={{ width: '500px', height: '400px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
