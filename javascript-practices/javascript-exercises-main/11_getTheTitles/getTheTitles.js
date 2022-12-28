const getTheTitles = function(obj) {
    let array = []
    for (let i=0; i<obj.length; i++) {
        array.push(obj[i].title)
    }
    return array
};

// Do not edit below this line
module.exports = getTheTitles;
