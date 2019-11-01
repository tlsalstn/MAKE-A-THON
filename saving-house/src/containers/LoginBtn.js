import React, { Component } from 'react';
import './LoginBtn.css';

class LoginBtn extends Component {
    render() {
        const { onClick, value } = this.props;

        return (
            <div className="loginBtn">
                <button onClick={onClick} className="btn">{value}</button>
            </div>
        );
    };
};

export default LoginBtn;