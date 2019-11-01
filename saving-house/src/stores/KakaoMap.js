import { observable, action, configure } from 'mobx';
import axios from 'axios';

configure({enforceActions: "observed"});

export default class KakaoMap {
    @observable data=[];

    @action setData = (data) => {this.data = [...data];}

    @action getData() {
        let result = axios({
            url: "https://dapi.kakao.com/v2/local/search/address.json",
            method: "GET",
            params: {
                query: "전북 삼성동 100"
            }
        });
        this.setData(result);
    };
};