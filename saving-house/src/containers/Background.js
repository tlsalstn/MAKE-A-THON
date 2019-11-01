import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import './Background.css';

const handleLogo = () => {
    window.location.href = "/";
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
                                <li><Link to="/">신고위치</Link></li>
                                <li><Link to="/">위치</Link></li>
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