import React, { Component } from 'react';
import Card from './Card';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import defaultImage from '../Images/default.png';
import './ReportInfo.css';

const serverUri = "http://172.16.10.9:3002";

@inject("report")
@observer
class ReportInfo extends Component {
    UNSAFE_componentWillMount() {
        this.props.report.getReportInfo(this.props.id);
    }

    render() {
        const reportInfo = toJS(this.props.report.reportInfo);
        console.log(reportInfo);
        return (
            <div className="reportInfo">
                {reportInfo.Images === undefined ?
                defaultImage : <img className="img" src={serverUri + reportInfo.Images[0].path} alt={reportInfo.Images[0].id}/>}
                <Card className="info">
                    <p className="userId">UserId: {reportInfo.UserId}</p>
                    <p>{reportInfo.content}</p>
                </Card>
            </div>
        );
    };
};

export default ReportInfo;