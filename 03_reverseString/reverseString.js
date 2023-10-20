const reverseString = function(oldStr) {
    let newStr = '';
    let strLength = oldStr.length;

    for (i = 0; i < strLength; i++) {
        newStr = oldStr.slice(i, i+1) + newStr;
    }

    return newStr;
};

console.log(reverseString('hello there'))

// Do not edit below this line
module.exports = reverseString;
