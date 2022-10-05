function square (n) {
    return square = n * n;
}

function fahrenhiet (celsius) {
    return (celsius * 1.8) + 32;
}

function recrangleArea (a, b) {
    return (a * b);
}

function isPalindrome (str) {
    str = str.toLower();

    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str [len - 1 -i]) {
            return false; 
        } 
    } 
    return true;
}
