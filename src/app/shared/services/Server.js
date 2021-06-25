import axios from "axios";

const ServerService = () => {
    //const self = this;
    let svc = {};

    svc.get = function (url, reqParam) {
        return axios.get(url, {params: reqParam});
    };

    svc.post = function (url, reqbody) {
        return axios.get(url, reqbody);
    };

    return svc;
}

export default ServerService;