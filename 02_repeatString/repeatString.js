const repeatString = function(oldStr, num) {
    
    newStr = '';

    for(i = 0; i < num; i++){
        newStr += oldStr;
    }

    return newStr;
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
