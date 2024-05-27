const findTheOldest = function(objects) {
    let maxAge = 0;
    let maxIndx = -1;
    let iteratorIndx=-1;
    objects.map(function(object) {
        if(!("yearOfDeath" in object)) {
            object.yearOfDeath = new Date().getFullYear();
        }
        let age = object.yearOfDeath-object.yearOfBirth;
        
        iteratorIndx++;
        if(maxAge<age) {
            maxIndx = iteratorIndx;
            maxAge = age;
        }
    });
    return objects[maxIndx];
};

// Do not edit below this line
module.exports = findTheOldest;
