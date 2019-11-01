import React, { Component } from 'react';
import Background from '../containers/Background';
import ReportInfo from '../containers/ReportInfo';

class ReportInfoPage extends Component {
    render() {
        return (
            <div>
                <Background>
                    <ReportInfo id={this.props.match.params.id}/>
                </Background>
            </div>
        );
    };
};

export default ReportInfoPage;