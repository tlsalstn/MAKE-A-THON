import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';

@observer
class Map extends Component {
    render() {
        return (
            <div>
                <div id="map" className="map"></div>
            </div>
        );
    };
};

export default Map;