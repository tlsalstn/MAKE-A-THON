import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="info">
                    <div className="logo" />
                    <div className="name">
                        이유승
                        최정민
                        곽현준
                        신민수
                        </div>
                </div>
                <div className="logo" />
            </div>
        );
    };
};

export default Footer;