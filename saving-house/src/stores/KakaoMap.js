import { observable, action, configure } from 'mobx';
import axios from 'axios';

configure({enforceActions: "observed"});

const appkey = "7566ec4e8c97a31dd7d4d53420495eda";

export default class KakaoMap {
    @observable data = [];

    @action setData = (datas) => {this.data = [...datas];}

    @action async getData() {
        try{
            let result = await axios({
                url: "https://dapi.kakao.com/v2/local/search/address.json",
                method: "GET",
                headers: {
                    "Authorization": `KakaoAK ${appkey}`
                },
                params: {
                    query: "전북 삼성동 100"
                }
            });
            console.log(result.data.documents);
            this.setData(result);
            console.log(this.data);
        } catch(err) {
            console.log(err);
        }
    };
};