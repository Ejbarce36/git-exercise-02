function square (n) {
    let square = n * n;
    return square;
}

function fahrenhiet (celsius) {
    return (celsius * 1.8) + 32;
}

function recrangleArea (a, b) {
    return (a * b);
}

function isPalindrome (str) {
    let re = /[^A-Za-z0-9]/g;
    str = str.toLower().replace(re, '');

    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str [len - 1 -i]) {
            return false; 
        } 
    } 
    return true;
}
