"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Replacer = /** @class */ (function () {
    function Replacer(markerStart, markerStop) {
        this._markerStart = '{{';
        this._markerStop = '}}';
        if (markerStart !== undefined)
            this._markerStart = markerStart;
        if (markerStop !== undefined)
            this._markerStop = markerStop;
    }
    Object.defineProperty(Replacer.prototype, "markerStart", {
        set: function (value) {
            this._markerStart = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Replacer.prototype, "markerStop", {
        set: function (value) {
            this._markerStop = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Replace source with parameters
     * @param source a string as source
     * @param parameters an object contains replacement
     * @return a string
     */
    Replacer.prototype.replace = function (source, parameters) {
        var _this = this;
        var result = source;
        Object.keys(parameters).forEach(function (key) {
            result = result.replace("" + _this._markerStart + key + _this._markerStop, parameters[key]);
        });
        return result;
    };
    return Replacer;
}());
exports.default = Replacer;
