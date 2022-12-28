const findTheOldest = function(obj) {
    let oldestAge = 0
    for (i=0; i<obj.length; i++) {
        if (obj[i].yearOfDeath) {
            let age = obj[i].yearOfDeath - obj[i].yearOfBirth
            obj[i].age = age
        } else {
            const today = new Date()
            const currYear = today.getFullYear()
            let age = currYear - obj[i].yearOfBirth
            obj[i].age = age
        }
    }

    for (i=0; i<obj.length; i++) {
        if (obj[i].age > oldestAge) {
            oldestAge = obj[i].age
        }
    }

    const resultArr = obj.filter(e => e.age == oldestAge)
    const resultObj = Object.assign({},...resultArr)
    return resultObj
};

// Do not edit below this line
module.exports = findTheOldest;
