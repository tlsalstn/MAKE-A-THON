import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="header">
                    <div className="nav">
                        <div className="logo">
                            <span>Saving House</span>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><span>신고위치</span></li>
                                <li><span>위치</span></li>
                                <li><span>로그인</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="slogan">
                        <div className="text">
                            집 밖에서도 안전하게,
                            <br />
                            쉽고 간편하게 지키세요
                        </div>
                        <div className="image">
                            <div className="first" />
                            <div className="second" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="info">
                        <div className="call">
                            Tel) 010-0x00-0100
                            <br/>
                            대구광역시 달성군 창리로 11길 93
                            <br/>
                            Fax: 02-123-3494 | Mail: dgsw1234@dgsw.hs.kr
                        </div>
                        <div className="address">
                            주) 대구소프트웨어고등학교
                            <br/>
                            대구광역시 달성군 창리로 11길 93
                            <br/>
                            저작권 등록 번호: 038295018242
                        </div>
                        <div className="image">

                        </div>
                    </div>
                    <div className="team">
                        <div className="logo">

                        </div>
                        <div className="name">

                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Main;