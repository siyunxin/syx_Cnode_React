import axios from 'axios'
// import Qs from 'qs'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1';

axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.withCredentials = false;


export default axios


axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },

    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 404:
                    // vue.$toast('404，请稍候重试')
                    break;
                case 403:
                    // vue.$toast('403，请稍候重试')
                    break;
                case 500:
                    // vue.$toast('500，请稍候重试')
                    break;
                default:
                // vue.$toast('请求出错，请稍候重试')
            }
        } else {
            // vue.$toast('请求出错，请稍候重试')
        }
    }
)

/**
 * 
 * @param {*} url //请求地址
 * @param {*} params 请求参数
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            console.log("请求出错", err)
        })
    })
}

/**
 * 
 * @param {*} url 
 * @param {*} params 请求参数  如果后台是body传递 需要Qs.string(params)
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            console.log("请求出错", err)
        })
    })
}


