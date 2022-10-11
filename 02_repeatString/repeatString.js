const repeatString = function(string, num) {
    let val = '';
    if (num < 0){return 'ERROR'}
    for(let i = 0; i < num; i++ ){
        val += string;
    }
    return val;
};

// Do not edit below this line
module.exports = repeatString;
