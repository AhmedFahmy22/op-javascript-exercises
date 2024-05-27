const fibonacci = function(fibIndx) {
    let nums = [0,1];
    let temp = 0;
    if(fibIndx>=0){
        while(fibIndx>0) {
            fibIndx--;
            temp=nums[0]+nums[1];
            nums[0]=nums[1];
            nums[1]=temp;
        }
    }
    else{
        nums[0]="OOPS"
    }
    return nums[0];
};

// Do not edit below this line
module.exports = fibonacci;
