
exports.min = function min (array) {
  if (typeof array !== 'undefined' && array.length > 0 ) {
    return Math.min(...array)
  } 
    return 0;
}

exports.max = function max (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    return Math.max(...array)
}
return 0;
}

exports.avg = function avg (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    let sum = array.reduce((a, b) => a + b, 0);
    let result = sum / array.length;
    return result
  } 
  return 0;
}
