const sumAll = function(begin, end) {
    let totalSum = 0;
    let largeNum = 0;
    let smallNum = 0;

    if (begin > end) {
        largeNum = begin;
        smallNum = end;
    } else {
        largeNum = end;
        smallNum = begin;
    }

    for (i = smallNum; i <= largeNum; i++) {
        totalSum += i;
    }

    return totalSum;

};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
