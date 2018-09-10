import axios from 'axios';

let Promise = require('es6-promise').Promise;

const Axios = axios.create({
    baseURL: 'https://dev.imxyb.com',
    timeout: 5000,
    withCredentials: false, //带上 cookie
})

//添加一个请求拦截器
Axios.interceptors.request.use(config => {
    //POST传参序列化
    if (config.method === 'post') {
        // 数据序列化成表单
        if (config.data && config.data.data) {
            const formData = new FormData()
            Object.keys(config.data.data).forEach(key => formData.append(key, config.data.data[key]))
            config.data = formData
        }
    }

    if (config.method === 'put' || config.method == 'delete') {
        let url = ''
        for (let key in config.data) {
            url += key + '=' + config.data[key] + '&'
        }
        url = url.slice(0, url.length - 1)
        config.data = url
    }

    if (config.method === 'get' && config.url.indexOf('/toutiao/') != -1 && config.data) {
        let url = '?'
        for (let key in config.data) {
            url += key + '=' + config.data[key] + '&'
        }
        url = url.slice(0, url.length - 1)
        config.url += url
    }

    return config
}, error => {
    return Promise.reject(error)
})

//添加一个返回拦截器
Axios.interceptors.response.use(res => {
    const { data } = res
    if (data.status == 'ok') {
        return data
    } else {
		//处理错误
    }
    return data
}, error => {
    return Promise.reject(error)
})

export default Axios