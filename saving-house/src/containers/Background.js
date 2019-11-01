import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import './Background.css';

const handleLogo = () => {
    window.location.href = "/";
}

const map = () => {
    window.location.href = "http://172.16.10.9:3002/map";
}

class Background extends Component {
    render() {
        const { children } = this.props;
        
        return (
            <div className="header">
                    <div className="nav">
                        <div className="logo" onClick={handleLogo}/>
                        <div className="menu">
                            <ul>
                                <li><Link to="/reportList">신고리스트</Link></li>
                                <li><div onClick={map}>위치</div></li>
                                <li><Link to="/login">로그인</Link></li>
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
        );
    };
};

export default Background;