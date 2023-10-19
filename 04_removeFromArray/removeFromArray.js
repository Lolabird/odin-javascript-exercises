const removeFromArray = function(someArray, item) {
    for (i = 0; i < someArray.length; i++) {
        if (someArray[i] === item) {
            someArray.splice(i, 1);

        }
    }

    return someArray;
};

console.log(removeFromArray([1, 2, 3, 4, 3], 3));

// Do not edit below this line
module.exports = removeFromArray;
