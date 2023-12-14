const palindromes = function (str) {
    newStr = str.toLowerCase();
    newerStr = ""
    revStr = "";
    pal = false;


    for (let char of newStr) {
        if (char.match(/[a-zA-Z0-9]/i)){
            newerStr += char;
            revStr = char + revStr;
        }
    }

    if (newerStr == revStr) {
        pal = true;
    }
    console.log(revStr);
    return pal;
};

// Do not edit below this line
module.exports = palindromes;
