"use strict";
exports.__esModule = true;
exports.setAxiosAuthDefault = void 0;
var axios_1 = require("axios");
var setAxiosAuthDefault = function (auth) {
    axios_1["default"].defaults.headers = {
        authorization: auth.baerer_token,
        cookie: auth.cookies,
        "x-csrf-token": auth.csrf_token
    };
};
exports.setAxiosAuthDefault = setAxiosAuthDefault;
axios_1["default"].defaults.baseURL = "https://api.twitter.com/1.1/";
//
//
axios_1["default"].interceptors.request.use(function (request) {
    console.log(request.url);
    return request;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
axios_1["default"].interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
