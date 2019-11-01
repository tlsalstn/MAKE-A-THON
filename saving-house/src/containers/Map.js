import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './Map.css';

@inject("store")
@observer
class Map extends Component {

    componentDidMount() {
        // let container = document.getElementById("map");
        // let options = {
        //     center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        //     level: 3,
        // };
        // let map = new window.kakao.maps.Map(container, options);
        var uluru = { lat: -25.344, lng: 131.036 };
        var map = new window.google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });
        var marker = new window.google.maps.Marker({ position: uluru, map: map });
    }

    render() {
        return (
            <div>
                <div id="map" className="map" />
            </div>
        );
    };
};

export default Map;