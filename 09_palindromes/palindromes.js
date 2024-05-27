const palindromes = function (stringInput) {
    let stringArr = Array.from(stringInput.toUpperCase());
    /*Filter*/
    let filteredStringArr = stringArr.filter((input)=>(((input>='A')&&(input<='Z')) 
                                                        || ((input>='a')&&(input<='z')) 
                                                        || ((input>='0')&&(input<='9'))));
    return (filteredStringArr.join("")===filteredStringArr.reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
