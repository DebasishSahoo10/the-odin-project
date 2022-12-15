const sumAll = function(n, m) {
    let sum = 0;
    if (typeof n!='number' | typeof m!='number') {
        return 'ERROR'
    } else if (n<0 | m<0) {
        return 'ERROR'
    } else if (n>m) {
        for (let i=m ; i<=n; i++) {
            sum = sum + i
        }
    } else {
        for (let i=n ; i<=m; i++) {
            sum = sum + i
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
