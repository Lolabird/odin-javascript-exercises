const repeatString = function(oldStr, num) {
    
    newStr = '';

    if(num < 0) {
        return 'ERROR';
    } else {
        for(i = 0; i < num; i++){
            newStr += oldStr;
        }

         return newStr;
    }
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
