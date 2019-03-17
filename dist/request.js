"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Request = /** @class */ (function () {
    function Request(url, method) {
        this.headers = {};
        this.query = {};
        this.url = url;
        this.method = method;
    }
    Request.prototype.toString = function () {
        var _this = this;
        var url = this.url;
        var query = '';
        var keys = Object.keys(this.query);
        keys.forEach(function (key) {
            if (query !== '') {
                query += '&';
            }
            query += key + "=" + _this.query[key];
        });
        if (keys.length > 0) {
            query = url.indexOf('?') >= 0 ? "&" + query : "?" + query;
        }
        return "" + url + query;
    };
    return Request;
}());
exports.default = Request;
