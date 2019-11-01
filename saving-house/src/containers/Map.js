import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './Map.css';

@inject("store")
@observer
class Map extends Component {
    componentDidMount() {
        console.log(window.kakao);
        let container = document.getElementById("map");
        let options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };

        let map = new window.kakao.maps.Map(container, options);
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