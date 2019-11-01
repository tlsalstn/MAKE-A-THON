import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class Map extends Component {
    componentWillMount() {
        this.props.store.getData();
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                {data}
            </div>
        );
    };
};

export default Map;