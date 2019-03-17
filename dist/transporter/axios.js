"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var AxiosTransporter = /** @class */ (function () {
    function AxiosTransporter() {
    }
    AxiosTransporter.prototype.delete = function (url, headers) {
        return axios_1.default.delete(url, {
            headers: headers || {}
        });
    };
    AxiosTransporter.prototype.get = function (url, headers) {
        return axios_1.default.get(url, {
            headers: headers || {}
        });
    };
    AxiosTransporter.prototype.patch = function (url, body, headers) {
        return axios_1.default.patch(url, body, {
            headers: headers || {}
        });
    };
    AxiosTransporter.prototype.post = function (url, body, headers) {
        return axios_1.default.post(url, body, {
            headers: headers || {}
        });
    };
    AxiosTransporter.prototype.put = function (url, body, headers) {
        return axios_1.default.put(url, body, {
            headers: headers || {}
        });
    };
    return AxiosTransporter;
}());
exports.default = AxiosTransporter;
