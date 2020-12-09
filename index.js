;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            global.percentRound = factory();
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
        var percents = [];

        var ratio = 100/total;
        var check100 = 100;
        var percent;
        for (i = length-1; i>=0; i--)
        {
            check100 -= out[i] = Math.round(percents[i] = ipt[i]*ratio);
        }

        if (check100 != 0)
        {
            var idxs = {size: 0};
            percents = percents.map(function (val)
            {
                var floor = Math.floor(val);
                if (floor === val) return val;
                else return floor+0.5-val;
            });

            percents.forEach(check100 > 0 ?
                function (val, idx) {
                   if (val <= 0)
                   {
                       idxs[idx] = true;
                       idxs.size++;
                   }
                }
                :
                function (val, idx) {
                    if (val >= 0)
                    {
                        idxs[idx] = true;
                        idxs.size++;
                    }
                }
            );
            if (idxs.size === percents.length)
            {
                out[0] += check100;
                return out;
            } //Impossible in theory but let's be careful...

            var idxCopy = Object.assign({}, idxs);

            while (check100 < 0)
            {
                if (idxs.size === percents.length) idxs = Object.assign({}, idxCopy);
                var idx = percents.reduce(function (res, val, idx)
                {
                    if (idxs[idx] === true) return res;
                    if (val>res.min)
                    {
                        res.min = val;
                        res.minIdx = idx;
                    }
                    return res;
                }, {min: -0.5, minIdx: 0}).minIdx;
                out[idx] -= 1;
                if (out[idx] === 0)
                {
                    idxCopy[idx] = true;
                }
                idxs[idx] = true;
                idxs.size++;
                check100++;
            }

            while (check100 > 0)
            {
                if (idxs.size === percents.length) idxs = {size: invalids};
                var idx = percents.reduce(function (res, val, idx)
                {
                    if (idxs[idx] === true) return res;
                    if (val<res.max)
                    {
                        res.max = val;
                        res.maxIdx = idx;
                    }
                    return res;
                }, {max: 0.5, maxIdx: 0}).maxIdx;
                out[idx] += 1;
                idxs[idx] = true;
                idxs.size++;
                check100--;
            }
        }
        return out;
    }
}));
