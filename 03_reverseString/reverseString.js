const reverseString = function(string) {
    let splitString = string.split('');
    splitString.reverse();
    splitString = splitString.join('');
    return splitString;
};

// Do not edit below this line
module.exports = reverseString;
