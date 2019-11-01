import React, { Component } from 'react';
import Background from '../containers/Background';
import Card from '../containers/Card';
import Footer from '../containers/Footer';
// import LoginBtn from '../containers/LoginBtn';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <Background>
                    <div className="form">
                        <Card>
                            <div className="title">
                                <span>로그인</span>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="ID"/>
                                <input type="password" placeholder="PASSWORD"/>
                            </div>
                        </Card>
                    </div>
                </Background>
                <Footer/>
            </div>
        );
    };
};

export default Login;
