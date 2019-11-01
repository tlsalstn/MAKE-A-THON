import React, { Component } from 'react';
import Background from '../containers/Background';
import List from '../containers/List';

class ReportList extends Component {
    render() {
        return (
            <div>
                <Background>
                    <List/>
                </Background>
            </div>
        );
    };
};

export default ReportList;