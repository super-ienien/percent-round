[![npm version](https://badge.fury.io/js/percent-round.svg)](https://badge.fury.io/js/percent-round)
[![downloads](https://img.shields.io/npm/dm/percent-round)](https://npm-stat.com/charts.html?package=percent-round)
[![license](https://img.shields.io/github/license/super-ienien/percent-round)](https://github.com/super-ienien/percent-round/blob/main/LICENSE)
[![open issues](https://img.shields.io/github/issues-raw/super-ienien/percent-round.svg)](https://github.com/super-ienien/percent-round/issues)
[![Build Status](https://travis-ci.com/super-ienien/percent-round.svg?branch=master)](https://travis-ci.com/super-ienien/percent-round)

# 💯 Percent round
#### Take an array of numeric values and returns an array with corresponding rounded percentages. The total of the returned values will always be 100.


Works in browsers and nodeJS. Also, available as an ES module.

Zero Dependency

## Description
### *percentRound(percents, precision = 0)*

- **percents** - Number[]

  An array of numbers that represent the percentage values to be rounded. The total should be 100, but it is not mandatory.


- **precision** - Number (default = 0)

  The number of digits to appear after the decimal point.

## Usage

```javascript
import percentRound from "percent-round";

percentRound([10.34, 20.043, 30.04, 39.567]);     // [10,    20,    30,    40]
percentRound([10.34, 20.043, 30.04, 39.567], 1);  // [10.3,  20.1,  30,    39.6]
percentRound([10.34, 20.043, 30.04, 39.567], 2);  // [10.34, 20.05, 30.04, 39.57]
```

## Changelogs

- 2.1.0
  - add typescript declaration
  - add ES6 module support
  - add minified library distribution file
  - add MIT Licensing
  - add changelog
  - add Travis CI
- 2.0.0
  - add float precision argument feature
  - performance improve
  - new rounding algorithm = better performance and accuracy
  - add test suite
  - fix wrong global UMD module naming [#2](https://github.com/super-ienien/percent-round/issues/2)
  - fix error when input percents are strings [#1](https://github.com/super-ienien/percent-round/issues/1)


## License

MIT. See [LICENSE file](./LICENSE) for details.
