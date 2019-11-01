import React, { Component } from 'react';
import Background from '../containers/Background';
import List from '../containers/List';
import './ReportList.css';

class ReportList extends Component {
    render() {
        return (
            <div>
                <Background>
                    <p className="reportTitle">신고 리스트</p>
                    <List/>
                </Background>
            </div>
        );
    };
};

export default ReportList;