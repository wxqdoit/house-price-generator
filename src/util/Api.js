import axios from 'axios';
import qs from 'qs';

export class Api {
    constructor(ctx) {
        this.ctx = ctx;
        this.preLoading = null;
        this.preLoading = null;
        if (process.env.NODE_ENV === 'development') {
            this.baseUrl = 'https://app.definder.info'
        }
        if (process.env.NODE_ENV === 'production') {
            this.baseUrl = 'http://10.186.124.241:18090';
        }
        this.axios = axios;
        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
            timeout: 20000,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        this.axiosInstance.interceptors.response.use((res) => {
            if (res.status === 200) {
                return res.data
            } else {
                this.ctx.$message.error(res.statusText);
                return Promise.reject(res);
            }
        }, (error) => {
            if (this.preLoading) {
                this.preLoading.close();
            }
            return Promise.reject(error);
        });
    }

    /**
     * 单例模式
     * ctx为传入的 vue-->this
     * @param ctx
     */
    static getInstance(ctx) {
        return Api.instance ? Api.instance : Api.instance = new Api(ctx);
    }

    /**
     *刷新token
     */
    refreshToken() {
        this.axiosInstance.defaults.headers.token = localStorage.getItem("TOKEN") ? localStorage.getItem("TOKEN") : "";
    }

    /**
     * 获取首页总览数据
     * @param params
     * @returns {Promise<AxiosResponse<T>>}
     */
    totalOverview(params) {
        return this.axiosInstance.post(`/sr2/total`, qs.stringify(params));
    }


    getNewCoinList(params) {
        return this.axiosInstance.get(`/api/discover/newCoin/list/v2`, {params: params})
    }

    getNewAddressList(params){
        return this.axiosInstance.get(`/api/discover/address/list/v2`, {params: params})
    }

    getSymbolList(params) {
        return this.axiosInstance.post(`/api/market/symbol/list`, params);
    }

}

