export default function percentRound(ipt, precision = 0) {
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
        let check100 = 0;
        for (let i = length - 1; i >= 0; i--) {
            check100 += out[i] = (Math.round(iptPercents[i] * powPrecision) / powPrecision);
        }

        if (check100 !== 100) {
            const totalDiff = check100 - 100;
            const roundGrain = 1 / powPrecision;
            let grainCount = Math.round(Math.abs(totalDiff / roundGrain));
            const diffs = new Array(length);

            for (let i = 0; i < length; i++) {
                diffs[i] = Math.abs(out[i] - iptPercents[i]);
            }

            while (grainCount > 0) {
                let idx = 0;
                let maxDiff = diffs[0];
                for (let i = 1; i < length; i++) {
                    if (maxDiff < diffs[i]) {
                        idx = i;
                        maxDiff = diffs[i];
                    }
                }
                if (check100 > 100) {
                    out[idx] -= roundGrain;
                } else {
                    out[idx] += roundGrain;
                }
                diffs[idx] -= roundGrain;
                grainCount--;
            }
        }
    }

    return out;
}

// For es import compatibility
percentRound.default = percentRound;