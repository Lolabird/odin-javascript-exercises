const removeFromArray = function(someArray, ...items) {
    console.log(items);
    
    for (let i = 0; i < items.length; i++) {
        for (j = 0; j < someArray.length; j++) {
            if (someArray[j] === items[i]) {
                someArray.splice(j, 1);
            }
        }
    }

    return someArray;
};

console.log(removeFromArray([1, 2, 3, 4, 3], 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
