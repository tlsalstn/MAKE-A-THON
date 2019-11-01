import React, { Component } from 'react';
import Time from 'react-time-format'
import DispatchBtn from './DispatchBtn';
import './ListItem.css';
import { inject, observer } from 'mobx-react';

const move = (id) => {
    window.location.href = "/info/" + id;
}

@inject("report")
@observer
class ListItem extends Component {
    render() {
        const { id, userId, content, status, time } = this.props;
        return (
            <div className="item">
                <div className="container">
                    <div className="info" onClick={() => move(id)}>
                        <p className="id">{id}</p>
                        <p className="userId">{userId}</p>
                        <p className="content">{content}</p>
                        <p className="time"><Time value={time} format="YYYY/MM/DD hh:mm:ss" /></p>
                    </div>
                    <div className="status">
                        <DispatchBtn id={id} status={status} />
                    </div>
                </div>
            </div>
        );
    };
};

export default ListItem;