;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            global.moment = factory();
}(this, function () {
    'use strict';

    return function percentRounding (ipt)
    {
        var out;
        var length = ipt.length;
        for (var i = length-1, total = 0; i>=0; i--)
        {
            total += ipt[i];
        }

        if (total === 0) return Array.apply(null, new Array(length)).map(Number.prototype.valueOf,0);

        out = [];

        var ratio = 100/total;
        var check100 = 100;
        var percent;
        for (i = length-1; i>=0; i--)
        {
            percent = Math.round(ipt[i]*ratio);
            check100 -= percent;
            out[i] = percent;
        }
        if (check100 != 0)
        {
            out[0] += check100;
        }
        return out;
    }
}));