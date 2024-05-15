const repeatString = function(string, num) {
    result = undefined;
    if(num<0) {
        result = "ERROR";
    }    
    else {
        result = string.repeat(num);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
