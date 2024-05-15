const leapYears = function(year) {
    let returnVal = false;

    if(((year%4===0)&&(year%100!==0)) || (year%400===0)) {
        returnVal = true;
    }

    return returnVal;
};

// Do not edit below this line
module.exports = leapYears;
