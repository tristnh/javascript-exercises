const sumAll = function(num1, num2) {
    if(num1 < 0 || num2<0 || !Number.isInteger(num1) || !Number.isInteger(num2)){return 'ERROR'}

    if(num1>num2){
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    let finalSum = num1;

    for(i=0; i<num2-1; i++){
        ++num1;
        finalSum += num1;
      console.log(finalSum);
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
