// myApi.js
// 原生js进行二次封装

function createInstance() {
    var api = {};
    api.baseURL = '';
    api.interceptors = {
      request: {
        use: function(handler) {
          api.requestInterceptor = handler;
        }
      },
      response: {
        use: function(handler) {
          api.responseInterceptor = handler;
        }
      }
    };
  
    api.request = function(method, url, data) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, api.baseURL + url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      if (api.requestInterceptor) {
        api.requestInterceptor(xhr);
      }
      return new Promise(function(resolve, reject) {
        xhr.onload = function() {
          if (xhr.status >= 200 && xhr.status < 300) {
            var responseData = JSON.parse(xhr.responseText);
            if (api.responseInterceptor) {
              responseData = api.responseInterceptor(responseData);
            }
            resolve(responseData);
          } else {
            reject(new Error(xhr.statusText));
          }
        };
        xhr.onerror = function() {
          reject(new Error('Network Error'));
        };
        xhr.send(JSON.stringify(data));
      });
    };
  
    api.get = function(url, params) {
      var queryString = ''; 
      if (params) {
        var queryArr = [];
        for (var key in params) {
          queryArr.push(key + '=' + encodeURIComponent(params[key]));
        }
        queryString = '?' + queryArr.join('&');
      }
      return api.request('GET', url + queryString);
    };
    api.post = function(url, data) {
      return api.request('POST', url, data);
    };
    api.put = function(url, data) {
      return api.request('PUT', url, data);
    };
    api.delete = function(url) {
      return api.request('DELETE', url);
    };
    return api;
  }
  
  var axios = createInstance();
  export default axios;
  
//   // 使用如下
//   // 使用示例
//   axios.get('/data', { page: 1, limit: 10 })
//     .then(function(response) {
//       console.log(response);
//       // 处理数据
//     })
//     .catch(function(error) {
//       console.log(error);
//       // 处理错误
//     });
  
//   axios.post('/data', { name: 'John', age: 25 })
//     .then(function(response) {
//       console.log(response);
//       // 处理数据
//     })
//     .catch(function(error) {
//       console.log(error);
//       // 处理错误
//     });
  
  
//   //   如何在axios中设置请求的Content-Type头部？
//   // 设置Content-Type为application/json
//   axios.post('/api/endpoint', data, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
  
//   // 设置Content-Type为application/x-www-form-urlencoded
//   axios.post('/api/endpoint', data, {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   });
  
//   // 设置自定义的Content-Type
//   axios.post('/api/endpoint', data, {
//     headers: {
//       'Content-Type': 'custom/type'
//     }
//   });
  
  
  