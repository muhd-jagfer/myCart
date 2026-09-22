import {formatCurrency} from "../scripts/utils/money";

console.log('test suite: formatCurrency');
console.log('cents into dollar');
if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('faled');
}
console.log('with 0');
if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}
console.log('with larger number');
if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}