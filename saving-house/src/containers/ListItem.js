import React from 'react';
import Time from 'react-time-format'
import './ListItem.css';

const serverUrl = "http://172.16.10.9:3002/\\"

const ListItem = ({ id, userId, content, status, time }) => (
    <div className="item">
        <div className="container">
            <span className="id">{id}</span>
            <span className="userId">{userId}</span>
            <span className="content">{content}</span>
            <span className="status">{status}</span>
            <span className="time"><Time value={time} format="YYYY/MM/DD" /></span>
        </div>
    </div>
);

export default ListItem;