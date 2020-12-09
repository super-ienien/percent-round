# Percent-round
#### Take an array of numeric values and returns an array with corresponding rounded percentages. The total of the returned values will always be 100.


### *percentRound(percents, precision = 0)*

- **percents** - Number[]

  An array of numbers that represent the percentage values to be rounded. The total should be 100, but it is not mandatory.


- **precision** - Number (default = 0)

  The number of digits to appear after the decimal point.

##Usage
```javascript
const percentRound = require ('percent-round');
percentRound([10.34, 20.043, 30.04, 39.567]);     // [10,    20,    30,    40]
percentRound([10.34, 20.043, 30.04, 39.567], 1);  // [10.3,  20.1,  30,    39.6]
percentRound([10.34, 20.043, 30.04, 39.567], 2);  // [10.34, 20.05, 30.04, 39.57]
```
