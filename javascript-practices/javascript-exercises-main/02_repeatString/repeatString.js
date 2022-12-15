const repeatString = function(string, n) {
    if (n<0) {
        return 'ERROR'
    } else if (n===0) {
        return ''
    } else {
        let conncattedString = string;
        for (let i=0; i<(n-1); i++) {
            conncattedString = conncattedString + string
        }
        return conncattedString
    }
    
};

// Do not edit below this line
module.exports = repeatString;
