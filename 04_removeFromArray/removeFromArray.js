const removeFromArray = function(array, ...rm) {
    return array.filter((x) => !rm.includes(x));
    
};

// Do not edit below this line
module.exports = removeFromArray;
