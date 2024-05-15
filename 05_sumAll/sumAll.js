const sumAll = function(num1, num2) {
    let sum = undefined;

    if(num1>num2) {
        num1 = num1 ^ num2;
        num2 = num1 ^ num2;
        num1 = num1 ^ num2;
    }

    if(!((typeof num1 === "number") && (typeof num2 === "number")) || (num1<0)) {
        sum = "ERROR";
    }
    else {
        sum = 0;
        for(let cntr = num1; cntr<=num2; cntr++){
            sum += cntr;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
