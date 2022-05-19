/**
 * percent-round
 * Generated: 2022-05-19
 * Version: 2.3.1
 * Copyright 2020 Vivien Anglesio
 * License : MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.percentRound = factory());
}(this, (function () { 'use strict';

    function percentRound(ipt, precision) {
        if (!precision) {
            precision = 0;
        }
        if (!Array.isArray(ipt)) {
            throw new Error('percentRound input should be an Array');
        }
        const iptPercents = ipt.slice();
        const length = ipt.length;
        const out = new Array(length);

        let total = 0;
        for (let i = length - 1; i >= 0; i--) {
            if (typeof iptPercents[i] === "string") {
                iptPercents[i] = Number.parseFloat(iptPercents[i]);
            }
            total += iptPercents[i] * 1;
        }
        if (isNaN(total)) {
            throw new Error('percentRound invalid input');
        }

        if (total === 0) {
            out.fill(0);
        } else {
            const powPrecision = Math.pow(10, precision);
            const pow100 = 100 * powPrecision;
            let check100 = 0;
            for (let i = length - 1; i >= 0; i--) {
                iptPercents[i] = 100 * iptPercents[i] / total;
                check100 += out[i] = Math.round(iptPercents[i] * powPrecision);
            }

            if (check100 !== pow100) {
                const totalDiff = (check100 - pow100) ;
                const roundGrain = 1;
                let grainCount = Math.abs(totalDiff);
                const diffs = new Array(length);

                for (let i = 0; i < length; i++) {
                    diffs[i] = Math.abs(out[i] - iptPercents[i] * powPrecision);
                }

                while (grainCount > 0) {
                    let idx = 0;
                    let maxDiff = diffs[0];
                    for (let i = 1; i < length; i++) {
                        if (maxDiff < diffs[i]) {
                            // avoid negative result
                            if (check100 > pow100 && out[i] - roundGrain < 0) {
                                continue;
                            }
                            idx = i;
                            maxDiff = diffs[i];
                        }
                    }
                    if (check100 > pow100) {
                        out[idx] -= roundGrain;
                    } else {
                        out[idx] += roundGrain;
                    }
                    diffs[idx] -= roundGrain;
                    grainCount--;
                }
            }

            if (powPrecision > 1) {
                for (let i = 0; i < length; i++) {
                    out[i] = out[i] / powPrecision;
                }
            }
        }

        return out;
    }

    // For es import compatibility
    percentRound.default = percentRound;

    return percentRound;

})));
