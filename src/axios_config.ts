import axios from "axios";

const setAxiosAuthDefault = (auth) => {
  axios.defaults.headers = {
    authorization: auth.baerer_token,
    cookie: auth.cookies,
    "x-csrf-token": auth.csrf_token,
  };
};

axios.defaults.baseURL = "https://api.twitter.com/1.1/";
//

//
axios.interceptors.request.use(
  function (request) {
    console.log(request.url);
    return request;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export { setAxiosAuthDefault };
