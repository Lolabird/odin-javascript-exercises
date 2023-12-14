const palindromes = function (str) {
    revStr = "";
    pal = false;

    for (let char in str) {
        revStr = str[char] + revStr;
    }

    if (str == revStr) {
        pal = true;
    }
    console.log(revStr);
    return pal;
};

// Do not edit below this line
module.exports = palindromes;
