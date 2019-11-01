import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class Map extends Component {
    UNSAFE_componentWillMount() {
        const script = document.createElement("script");

        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=c4da3d388ebc3460090db79edeb9e993"
        script.type = "text/javascript";
        script.async = true;

        document.body.appendChild(script);

        let container = document.getElementById("map");
        let options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };

        let map = new window.kakao.maps.Map(container, options);
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                <div id="map" className="map"/>
                {data}
            </div>
        );
    };
};

export default Map;