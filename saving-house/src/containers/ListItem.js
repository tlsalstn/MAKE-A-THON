import React, { Component } from 'react';
import Time from 'react-time-format'
import DispatchBtn from './DispatchBtn';
import './ListItem.css';
import { inject, observer } from 'mobx-react';

const move = (id) => {
    
}

@inject("report")
@observer
class ListItem extends Component {
    render() {
        const { id, userId, content, status, time } = this.props;
        return (
            <div className="item" onClick={() => move(id)}>
                <div className="container">
                    <p className="id">{id}</p>
                    <p className="userId">{userId}</p>
                    <p className="content">{content}</p>
                    <div className="status">
                        <DispatchBtn id={id} status={status}/>
                    </div>
                    <p className="time"><Time value={time} format="YYYY/MM/DD" /></p>
                </div>
            </div>
        );
    };
};

export default ListItem;