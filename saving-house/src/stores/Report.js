import { observable, action, configure } from 'mobx';
import axios from 'axios';

configure({enforceActions: "observed"});

const serverUri = "http://172.16.10.9:3002";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhYSIsImlhdCI6MTU3MjYwOTMzMCwiZXhwIjoxNTc3NzkzMzMwLCJpc3MiOiJER1NXLkhTLktSIiwic3ViIjoidG9rZW4ifQ.x94hZza_gRizzxpgr9jSuMziIS133XVkwVWMhTRwhxE";

export default class Report {
    @observable report = [];
    @observable reportInfo = {};

    @action setReport = (reports) => {this.report = [...reports];}
    @action setReportInfo = (reportInfo) => {this.reportInfo = {...reportInfo};}

    @action async getReport() {
        try{
            let result = await axios({
                url: serverUri + "/api/report",
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": true,
                    "token": token,
                },
            });
            this.setReport(result.data.data);
        }catch(error) {
            console.log(error);
        }
    }

    @action async getReportInfo(id) {
        try{
            let result = await axios({
                url: serverUri + "/api/report/reportInfo/" + id,
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": true,
                    "token": token,
                },
            });
            this.setReportInfo(result.data);
        }catch(error) {
            console.log(error);
        }
    }

    @action async changeState(id) {
        try{
            await axios({
                url: serverUri + "/api/report/changeState/" + id,
                method: "PATCH",
                headers: {
                    "Access-Control-Allow-Origin": true,
                    "token": token,
                },
                data: {
                    "rescueState": 1,
                }
            })
            this.getReport();
        }catch(error) {
            console.log(error);
        }
    }
}