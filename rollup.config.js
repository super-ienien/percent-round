import {terser} from 'rollup-plugin-terser';
import license from 'rollup-plugin-license';

const licensePlugin = license({
    sourcemap: true,
    banner: {
        content:
        `
            <%= pkg.name %>
            Generated: <%= moment().format('YYYY-MM-DD') %>
            Version: <%= pkg.version %>
            Copyright 2020 Vivien Anglesio
            License : MIT
        `,
        data()
        {
            return {
                foo: 'foo',
            };
        },
    },
})

export default {
    input: 'src/index.js',
    output: [{
        file: 'dist/percent-round.js',
        format: 'umd',
        name: 'percentRound',
        plugins: [licensePlugin],
    },
    {
        file: 'dist/percent-round.min.js',
        format: 'umd',
        name: 'percentRound',
        plugins: [terser(), licensePlugin]
    },
    {
        file: 'dist/percent-round.esm.js',
        format: 'es',
        plugins: [licensePlugin],
    }]
};
