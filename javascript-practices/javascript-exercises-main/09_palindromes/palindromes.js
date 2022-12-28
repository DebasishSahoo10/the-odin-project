const palindromes = function (string) {
    let punctionLess = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    let finalString = punctionLess.replaceAll(' ','')
    let array = finalString.split('').reverse().join('')
    if (finalString.toLowerCase() == array.toLowerCase()) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
