function square (n) {
    return square = n * n;
}

function fahrenhiet (celsius) {
    return (celsius * 1.8) + 32;
}

function rectangleArea (a, b) {
    return (a * b);
}

function isPalindrome (str) {
    str = str.toLowerCase();

    for (let i = 0; i < (str.length)/2; i++) {
        if (str[i] !== str [(str.length) - 1 -i]) {
            return false; 
        } 
    } 
    return true;
}

module.exports = {
    square,
    fahrenhiet,
    rectangleArea,
    isPalindrome
}
