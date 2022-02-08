import axios from 'axios'
import { Notification } from 'element-ui'
export const domain = 'http://192.168.1.77:20008/boardManage/'

// create an axios instance
const service = axios.create({
    baseURL: domain, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        config.headers.token = 'token'
        return config
    },
    err => {
        // do something with request error
        console.log(err) // for debug
        return Promise.reject(err)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        return response.data
    },
    err => {
        if (err && err.response) {
            var str = ''
            switch (err.response.status) {
                case 400:
                    for (const obj1 in err.response.data.msg) {
                        str += err.response.data.msg[obj1]
                    }
                    err.message = `请求错误:${str}`
                    break

                case 401:
                    err.message = '未授权，请登录'
                    break

                case 403:
                    err.message = '拒绝访问'
                    break

                case 404:
                    for (const obj1 in err.response.data.msg) {
                        str += err.response.data.msg[obj1]
                    }
                    err.message = `请求地址出错: ${str}`
                    break

                case 408:
                    err.message = '请求超时'
                    break

                case 500:
                    err.message = `服务器内部错误:${err.response.data.msg}`
                    break

                case 501:
                    err.message = '服务未实现'
                    break

                case 502:
                    err.message = '网关错误'
                    break

                case 503:
                    err.message = '服务不可用'
                    break

                case 504:
                    err.message = '网关超时'
                    break

                case 505:
                    err.message = 'HTTP版本不受支持'
                    break

                default:
                    err.message = err.response.data.msg
            }
            Notification({
                title: err.response.status,
                dangerouslyUseHTMLString: true,
                message: '<div>' + err.message + '</div>',
                type: err.response.data.notificationInfo.notifationType
                    ? err.response.data.notificationInfo.notifationType : ''
            })
        } else if (err && err.message && err.message.includes('timeout')) {
            Notification({
                title: '请求接口超时',
                message: err.config.url,
                type: 'error'
            })
        }
        return Promise.reject(err.message)
    }
)

export default service