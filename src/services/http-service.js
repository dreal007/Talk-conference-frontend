import axios from 'axios'
import awaitTo from '../utils/await-to'
import Vue from 'vue'
import store from '../store'

const options = {
     baseURL: 'https://talk-conference-2020.herokuapp.com/api/v1/',
    // baseURL: 'http://localhost:4000/api/v1/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};

const $httpClient = axios.create(options)
const $axiosClient = axios.create(options);

// $httpClient.interceptors.request.use(function (config) {
//     const user_info = store.state.item_store.user_info;
//     if (Object.keys(user_info).length) {
//         config.headers.Authorization = user_info.access_token ? `Bearer ${user_info.access_token}` : '';
//     }
//     return config;
// });

const $http = {
    get(url) {
        return awaitTo($httpClient.get(url));
    },

    post(url, body) {
        return awaitTo($httpClient.post(url, body));
    },

    put(url, body) {
        return awaitTo($httpClient.put(url, body));
    },

    patch(url, body) {
        return awaitTo($httpClient.patch(url, body));
    },

    delete(url) {
        return awaitTo($httpClient.delete(url));
    },
}

const $axios = $axiosClient;

Vue.mixin({
    beforeCreate() {
        const options = this.$options;
        if (options.http || options.axios) {
            this.$http = options.http;
            this.$axois = options.axios;
        }

        else if ((options.parent && options.parent.$http) || (options.parent && options.parent.$axios)) {
            this.$http = options.parent.$http;
            this.$axios = options.parent.$axios;
        }

    }
});


export { $http, $axios };