const palindromes = function (words) {
    let workingstring = words.toLowerCase().replace(/[^a-z]/g, '');
    return(
        workingstring
        .split('')
        .reverse()
        .join('') == workingstring
    );
};

// Do not edit below this line
module.exports = palindromes;
