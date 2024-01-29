import request from '../src/utils/request'

// function test() {
//     return axios({
//         url:'api/test'
//     })
// }

export default {
    test(params) {
        return request({
            url:''
        })
    }
}

// 使用：
// import { test } from ''
// test().then(res => {
//     console.log(res);
// })