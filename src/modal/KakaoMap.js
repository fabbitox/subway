import React from 'react'
import { useEffect } from 'react'
const { kakao } = window

const KakaoMap = (props) => {
    const addr = props.addr;
    useEffect(() => {
        var mapContainer = document.getElementById('station-map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(35.2296168581211, 129.089342280899),
                level: 3 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption);
        var geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(addr, function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                console.log(coords);
                map.setCenter(coords);
            }
        });
    }, [addr]);

    return (
        <div id='station-map' style={{
            width: '25vmax',
            height: '25vmax',
            marginLeft: '1vmax'
        }}></div>
    )
}

export default KakaoMap