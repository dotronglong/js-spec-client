"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replacer_1 = require("./replacer");
var request_1 = require("./request");
var axios_1 = require("./transporter/axios");
var Spec = /** @class */ (function () {
    function Spec(endpoints, parameters, middlewares, transporter) {
        this._endpoints = {};
        this._parameters = {};
        this._middlewares = [];
        this._replacer = new replacer_1.default();
        this._transporter = new axios_1.default();
        if (endpoints !== undefined)
            this._endpoints = endpoints;
        if (parameters !== undefined)
            this._parameters = parameters;
        if (middlewares !== undefined)
            this._middlewares = middlewares;
        if (transporter !== undefined)
            this._transporter = transporter;
    }
    Object.defineProperty(Spec.prototype, "endpoints", {
        get: function () {
            return this._endpoints;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spec.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spec.prototype, "middlewares", {
        get: function () {
            return this._middlewares;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spec.prototype, "replacer", {
        get: function () {
            return this._replacer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spec.prototype, "transporter", {
        get: function () {
            return this._transporter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Executes a request
     * @param name
     * @param middleware
     * @param parameters
     */
    Spec.prototype.call = function (name, middleware, parameters) {
        if (this.endpoints[name] === undefined) {
            throw new Error(name + " could not be found");
        }
        var endpoint = this.endpoints[name];
        var request = new request_1.default(endpoint.url, endpoint.method);
        this.middlewares.forEach(function (f) { return f(request); });
        if (typeof middleware === 'function')
            middleware(request);
        var url = request.toString();
        url = this.replacer.replace(url, this.parameters);
        if (typeof parameters === 'object' && parameters !== null)
            url = this.replacer.replace(url, parameters);
        switch (endpoint.method) {
            case Method.GET:
                return this.transporter.get(url, request.headers);
            case Method.POST:
                return this.transporter.post(url, request.body, request.headers);
            case Method.PUT:
                return this.transporter.put(url, request.body, request.headers);
            case Method.PATCH:
                return this.transporter.patch(url, request.body, request.headers);
            case Method.DELETE:
                return this.transporter.delete(url, request.headers);
            default:
                throw new Error(name + " is using unsupported method");
        }
    };
    return Spec;
}());
exports.Spec = Spec;
var Method;
(function (Method) {
    Method[Method["GET"] = 0] = "GET";
    Method[Method["POST"] = 1] = "POST";
    Method[Method["PUT"] = 2] = "PUT";
    Method[Method["PATCH"] = 3] = "PATCH";
    Method[Method["DELETE"] = 4] = "DELETE";
    Method[Method["OPTIONS"] = 5] = "OPTIONS";
    Method[Method["HEAD"] = 6] = "HEAD";
})(Method = exports.Method || (exports.Method = {}));
