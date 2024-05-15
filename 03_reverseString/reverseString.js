const reverseString = function(string) {
    let teststr = [];
    let stringLen = string.length;
    for(let cntr = 0; cntr<stringLen; cntr++) {
        teststr[stringLen-cntr-1] = string[cntr];
    }
    return teststr.join('');
};

// Do not edit below this line
module.exports = reverseString;
