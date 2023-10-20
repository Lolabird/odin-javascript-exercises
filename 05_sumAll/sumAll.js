const sumAll = function(begin, end) {
    let totalSum = 0;
    let largeNum = 0;
    let smallNum = 0;

    for (i = begin; i <= end; i++) {
        totalSum += i;
    }

    return totalSum;

};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
