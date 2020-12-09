const mlog = require('mocha-logger').log;
const assert = require('assert');
const percentRound = require('../index');

function total (percents) {
    return percents.reduce((total, percent) => total + percent, 0)
}
 describe('Percent round test', function() {
    describe('Array with total === 0', function() {
        const input = [0, 0, 0];
        const rounded = percentRound(input);
        mlog(input, ' > ', rounded)
        it('input total should be 0', function() {
            assert.equal(total(input), 0);
        });
        it('result total should be 100', function() {
            assert.equal(total(rounded), 0);
        });
    });
    describe('Array with rounded total === 101', function() {
        const input = [10.5, 20, 30, 39.5]
        const rounded = percentRound(input);
        mlog(input, ' > ', rounded)
        it('result total should be 100', function() {
            assert.equal(total(rounded), 100);
        });
    });
    describe('Array with precision 0', function() {
        const input = [10.34, 20.043, 30.04, 39.567]
        const rounded = percentRound(input, 0);
        mlog(input, ' > ', rounded)
        it('result total should be 100', function() {
            assert.equal(total(rounded), 100);
        });
    });
    describe('Array with precision 1', function() {
        const input = [10.34, 20.043, 30.04, 39.567]
        const rounded = percentRound(input, 1);
        mlog(input, ' > ', rounded)
        it('result total should be 100', function() {
            assert.equal(total(rounded), 100);
        });
    });
     describe('Array with precision 2', function() {
         const input = [10.34, 20.043, 30.04, 39.567]
         const rounded = percentRound(input, 2);
         mlog(input, ' > ', rounded)
         it('result total should be 100', function() {
             assert.equal(total(rounded), 100);
         });
     });
    describe('Array with rounded total === 99', function() {
        const input = [10.3, 20.3, 30, 39.4]
        const rounded = percentRound(input);
        mlog(input, ' > ', rounded)
        it('result total should be 100', function() {
            assert.equal(total(rounded), 100);
        });
    });
    describe('Array with total === 99', function() {
        const input = [30, 38.8, 30.2];
        const rounded = percentRound(input);
        mlog(input, ' > ', rounded)
        it('input should be 99', function() {
            assert.equal(total(input), 99);
        });
        it('result total should be 100', function() {
            assert.equal(total(rounded), 100);
        });
    });
    describe('Array with total === 98', function() {
        const input = [11, 8.1, 9, 9.5, 60.4];
        const rounded = percentRound(input);
        mlog(input, ' > ', rounded)
        it('input should be 98', function() {
            assert.equal(total(input), 98);
        });
        it('result total should be 100', function() {
            assert.equal(total(rounded), 100);
        });
    });
    describe('Array with strings', function() {
        const input = ["11", "8.1", "9", "9.5", "60.4"];
        const rounded = percentRound(input);
        mlog(input, ' > ', rounded)
        it('result total should be 100', function() {
            assert.equal(total(rounded), 100);
        });
    });
});
