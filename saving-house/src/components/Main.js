import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Background from '../containers/Background';
import Footer from '../containers/Footer';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Background>
                    <div className="slogan">
                        <div className="text">
                            집 밖에서도 안전하게,
                            <br />
                            쉽고 간편하게 지키세요
                        </div>
                        <div className="image">
                            <div className="f" />
                            <div className="s" />
                        </div>
                    </div>
                </Background>
                <Footer/>
            </div>
        );
    };
};

export default Main;