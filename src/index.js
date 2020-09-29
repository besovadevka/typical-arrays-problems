
exports.min = function min (array) {
    if (!Array.isArray(array) || !!array.length === false) return 0;
    return Math.min(...array);
}   

exports.max = function max (array) {
    if (!array || !array.length) return 0;
    return Math.max(...array);
}

exports.avg = function avg (array) {
    if (!(array instanceof Array) || !array.length) return 0;
    let sum = array.reduce((a, b) => a + b);
    return (sum / array.length);
}
